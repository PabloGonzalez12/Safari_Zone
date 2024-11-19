import Phaser from "phaser";

export default class Menu extends Phaser.Scene {
  constructor() {
    super("Menu");
  }

  // Initialize the scene with data from the previous scene
  init(data) {
    this.capturedPokemon = data.capturedPokemon || [];
  }

  // Runs once, loads up assets like images and audio
  preload() {
    // Load background image for the menu
    this.load.image("menu_img", "assets/menu.png");

    // Load map JSON file
    this.load.tilemapTiledJSON("map", "assets/menu.json");

    // Load player sprite atlas
    this.load.atlas("player", "assets/player.png", "assets/player.json");

    // Load background music
    this.load.audio("music", "assets/music.mp3");

    // Load Pokémon images if there is any captured
    this.capturedPokemon.forEach((pokemon) => {
      this.load.image(
        `pokemon_${pokemon.id}`,
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`
      );
    });
  }

  // Runs once, after all assets in preload are loaded
  create() {
    // Play background music
    this.music = this.sound.add("music", { volume: 0.5, loop: false });
    this.music.play();

    // Create map
    const map = this.make.tilemap({ key: "map" });

    // Add tileset to the map
    const menuTile = map.addTilesetImage("menu", "menu_img");

    // Add map layers
    map.createLayer("fondo", menuTile);
    const floor = map.createLayer("borde", menuTile);
    floor.setCollisionByExclusion([-1], true); // Set collision on floor layer

    // Show "Last Play" text and Pokémon images only if there are captured Pokémon
    if (this.capturedPokemon.length > 0) {
      // Display "Last Play" text
      this.add.text(170, 250, "Last Play:", {
        fontSize: "16px",
        color: "#FFFFFF",
        fontFamily: "Arial",
        fontStyle: "bold",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        padding: { x: 10, y: 5 },
        align: "center",
      });

      // Display each captured Pokémon image with background
      let xOffset = 150;
      this.capturedPokemon.forEach((pokemon) => {
        // Create background with centered coordinates
        const bg = this.add.graphics();
        bg.fillStyle(0x000000, 0.5); // Black background with some transparency
        bg.fillRect(xOffset - 20, 300 - 20, 40, 40); // Background size and position

        // Create Pokémon image and set it to be centered on the background
        const pokemonSprite = this.add.image(xOffset, 300, `pokemon_${pokemon.id}`);
        pokemonSprite.setOrigin(0.5); // Center the origin of the sprite
        pokemonSprite.setScale(0.5); // Adjust size of the image
        
        xOffset += 50; // Space between images
      });

    }


    this.add.text(0, 0, "Press X to view your pokemon inventory", {
      fontSize: "16px",
      color: "#FFFFFF",
      fontFamily: "Arial",
      fontStyle: "bold",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      padding: { x: 10, y: 5 },
      align: "center",
    });


    // Add blinking text
    const blinkingText = this.add.text(40, 180, "Enter the door to start the game!", {
      fontSize: "24px",
      color: "#FFFFFF",
      fontFamily: "Arial",
      fontStyle: "bold",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      padding: { x: 10, y: 5 },
      align: "center",
    });

    // Create a tween to make the text blink
    this.tweens.add({
      targets: blinkingText,
      alpha: { from: 1, to: 0.3 }, // Switch between fully visible and partially visible
      duration: 500, // Duration of each blink (in milliseconds)
      ease: 'Linear', // Animation type
      repeat: -1, // Repeat indefinitely
      yoyo: true, // Reverse the tween to return to the original state
    });

    // Create player sprite
    this.player = this.physics.add.sprite(215, 120, "player");
    this.player.setCollideWorldBounds(true); // Player cannot exit map bounds
    this.cursors = this.input.keyboard.createCursorKeys();
    this.xKey = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.X
    )

    // Add collision between player and floor layer
    this.physics.add.collider(this.player, floor);

    // Create player animations
    this.anims.create({
      key: "down",
      frames: this.anims.generateFrameNames("player", {
        prefix: "down_",
        start: 1,
        end: 3,
        zeroPad: 2,
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "left",
      frames: this.anims.generateFrameNames("player", {
        prefix: "left_",
        start: 1,
        end: 3,
        zeroPad: 2,
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "up",
      frames: this.anims.generateFrameNames("player", {
        prefix: "up_",
        start: 1,
        end: 3,
        zeroPad: 2,
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "idle_down",
      frames: [{ key: "player", frame: "idle_down" }],
      frameRate: 1,
      repeat: -1,
    });

    // Define the door hitbox at specific coordinates
    this.door = this.physics.add.staticSprite(215, 92, null);
    this.door.setVisible(false); // Hide the door sprite
    this.door.body.setSize(7, 10); // Adjust the size of the door hitbox

    // Detect collision between the player and the door
    this.physics.add.overlap(this.player, this.door, this.enterDoor, null, this);
  }

  // Runs once per frame for the duration of the scene
  update() {
    // Player movement
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-50);
      this.player.setFlipX(false);
      this.player.anims.play("left", true);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(50);
      this.player.setFlipX(true);
      this.player.anims.play("left", true);
    } else if (this.cursors.down.isDown) {
      this.player.setVelocityY(50);
      this.player.setFlipX(true);
      this.player.anims.play("down", true);
    } else if (this.cursors.up.isDown) {
      this.player.setVelocityY(-50);
      this.player.anims.play("up", true);
    } else {
      this.player.setVelocityX(0);
      this.player.setVelocityY(0);
      this.player.anims.play("idle_down", true);
    }


    if (this.xKey.isDown) {
      this.music.stop();
      this.scene.start('Inventory', { inventoryPokemons: this.capturedPokemon});
    }
  }

  // Method to switch to the "Safari" scene
  enterDoor(player, door) {
    this.music.stop();
    this.scene.start("Change");
  }

}
