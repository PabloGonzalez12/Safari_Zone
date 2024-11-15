import Phaser from "phaser";

export default class Safari extends Phaser.Scene {
    constructor() {
        super("Safari");
    }

    finish = 0;
    coins = 0;
    lastCaptureAttempt = 0;
    pokemonCaptured = [];
    pokemons = [
        { name: "Bulbasaur", id: 1 },
        { name: "Ivysaur", id: 2 },
        { name: "Venusaur", id: 3 },
        { name: "Charmander", id: 4 },
        { name: "Charmeleon", id: 5 },
        { name: "Charizard", id: 6 },
        { name: "Squirtle", id: 7 },
        { name: "Wartortle", id: 8 },
        { name: "Blastoise", id: 9 },
        { name: "Caterpie", id: 10 },
        { name: "Metapod", id: 11 },
        { name: "Butterfree", id: 12 },
        { name: "Weedle", id: 13 },
        { name: "Kakuna", id: 14 },
        { name: "Beedrill", id: 15 },
        { name: "Pidgey", id: 16 },
        { name: "Pidgeotto", id: 17 },
        { name: "Pidgeot", id: 18 },
        { name: "Rattata", id: 19 },
        { name: "Raticate", id: 20 },
        { name: "Spearow", id: 21 },
        { name: "Fearow", id: 22 },
        { name: "Ekans", id: 23 },
        { name: "Arbok", id: 24 },
        { name: "Pikachu", id: 25 },
        { name: "Raichu", id: 26 },
        { name: "Sandshrew", id: 27 },
        { name: "Sandslash", id: 28 },
        { name: "Nidoran♀", id: 29 },
        { name: "Nidorina", id: 30 },
        { name: "Nidoqueen", id: 31 },
        { name: "Nidoran♂", id: 32 },
        { name: "Nidorino", id: 33 },
        { name: "Nidoking", id: 34 },
        { name: "Clefairy", id: 35 },
        { name: "Clefable", id: 36 },
        { name: "Vulpix", id: 37 },
        { name: "Ninetales", id: 38 },
        { name: "Jigglypuff", id: 39 },
        { name: "Wigglytuff", id: 40 },
        { name: "Zubat", id: 41 },
        { name: "Golbat", id: 42 },
        { name: "Oddish", id: 43 },
        { name: "Gloom", id: 44 },
        { name: "Vileplume", id: 45 },
        { name: "Paras", id: 46 },
        { name: "Parasect", id: 47 },
        { name: "Venonat", id: 48 },
        { name: "Venomoth", id: 49 },
        { name: "Diglett", id: 50 },
        { name: "Dugtrio", id: 51 },
        { name: "Meowth", id: 52 },
        { name: "Persian", id: 53 },
        { name: "Psyduck", id: 54 },
        { name: "Golduck", id: 55 },
        { name: "Mankey", id: 56 },
        { name: "Primeape", id: 57 },
        { name: "Growlithe", id: 58 },
        { name: "Arcanine", id: 59 },
        { name: "Poliwag", id: 60 },
        { name: "Poliwhirl", id: 61 },
        { name: "Poliwrath", id: 62 },
        { name: "Abra", id: 63 },
        { name: "Kadabra", id: 64 },
        { name: "Alakazam", id: 65 },
        { name: "Machop", id: 66 },
        { name: "Machoke", id: 67 },
        { name: "Machamp", id: 68 },
        { name: "Bellsprout", id: 69 },
        { name: "Weepinbell", id: 70 },
        { name: "Victreebel", id: 71 },
        { name: "Tentacool", id: 72 },
        { name: "Tentacruel", id: 73 },
        { name: "Geodude", id: 74 },
        { name: "Graveler", id: 75 },
        { name: "Golem", id: 76 },
        { name: "Ponyta", id: 77 },
        { name: "Rapidash", id: 78 },
        { name: "Slowpoke", id: 79 },
        { name: "Slowbro", id: 80 },
        { name: "Magnemite", id: 81 },
        { name: "Magneton", id: 82 },
        { name: "Farfetch'd", id: 83 },
        { name: "Doduo", id: 84 },
        { name: "Dodrio", id: 85 },
        { name: "Seel", id: 86 },
        { name: "Dewgong", id: 87 },
        { name: "Grimer", id: 88 },
        { name: "Muk", id: 89 },
        { name: "Shellder", id: 90 },
        { name: "Cloyster", id: 91 },
        { name: "Gastly", id: 92 },
        { name: "Haunter", id: 93 },
        { name: "Gengar", id: 94 },
        { name: "Onix", id: 95 },
        { name: "Drowzee", id: 96 },
        { name: "Hypno", id: 97 },
        { name: "Krabby", id: 98 },
        { name: "Kingler", id: 99 },
        { name: "Voltorb", id: 100 },
        { name: "Electrode", id: 101 },
        { name: "Exeggcute", id: 102 },
        { name: "Exeggutor", id: 103 },
        { name: "Cubone", id: 104 },
        { name: "Marowak", id: 105 },
        { name: "Hitmonlee", id: 106 },
        { name: "Hitmonchan", id: 107 },
        { name: "Lickitung", id: 108 },
        { name: "Koffing", id: 109 },
        { name: "Weezing", id: 110 },
        { name: "Rhyhorn", id: 111 },
        { name: "Rhydon", id: 112 },
        { name: "Chansey", id: 113 },
        { name: "Tangela", id: 114 },
        { name: "Kangaskhan", id: 115 },
        { name: "Horsea", id: 116 },
        { name: "Seadra", id: 117 },
        { name: "Goldeen", id: 118 },
        { name: "Seaking", id: 119 },
        { name: "Staryu", id: 120 },
        { name: "Starmie", id: 121 },
        { name: "Mr. Mime", id: 122 },
        { name: "Scyther", id: 123 },
        { name: "Jynx", id: 124 },
        { name: "Electabuzz", id: 125 },
        { name: "Magmar", id: 126 },
        { name: "Pinsir", id: 127 },
        { name: "Tauros", id: 128 },
        { name: "Magikarp", id: 129 },
        { name: "Gyarados", id: 130 },
        { name: "Lapras", id: 131 },
        { name: "Ditto", id: 132 },
        { name: "Eevee", id: 133 },
        { name: "Vaporeon", id: 134 },
        { name: "Jolteon", id: 135 },
        { name: "Flareon", id: 136 },
        { name: "Porygon", id: 137 },
        { name: "Omanyte", id: 138 },
        { name: "Omastar", id: 139 },
        { name: "Kabuto", id: 140 },
        { name: "Kabutops", id: 141 },
        { name: "Aerodactyl", id: 142 },
        { name: "Snorlax", id: 143 },
        { name: "Articuno", id: 144 },
        { name: "Zapdos", id: 145 },
        { name: "Moltres", id: 146 },
        { name: "Dratini", id: 147 },
        { name: "Dragonair", id: 148 },
        { name: "Dragonite", id: 149 },
        { name: "Mewtwo", id: 150 },
        { name: "Mew", id: 151 },
    ];
    

    preload() {
        this.pokemonCaptured = [];
        this.finish = 0;
        this.load.image("safari_img", "assets/safari.png");
        this.load.tilemapTiledJSON("mapSafari", "assets/safari.json");
        this.load.atlas("player", "assets/player.png", "assets/player.json");
        this.load.image("pokeball", "assets/pokeball.png");

        // Load music
        this.load.audio("safari", "assets/safari.mp3");
    }

    create() {
        this.safari = this.sound.add("safari", { volume: 0.5, loop: false });
        this.safari.play();

        const mapSafari = this.make.tilemap({ key: "mapSafari" });
        const safariTile = mapSafari.addTilesetImage("safari", "safari_img");

        mapSafari.createLayer("fondo", safariTile);
        this.grassLayer = mapSafari.createLayer("grass", safariTile);
        const floor = mapSafari.createLayer("borde", safariTile);
        floor.setCollisionByExclusion([-1], true);

        this.player = this.physics.add.sprite(215, 120, "player");
        this.player.setCollideWorldBounds(true);
        this.cursors = this.input.keyboard.createCursorKeys();
        this.physics.add.collider(this.player, floor);

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

        this.pokeballs = this.physics.add.group({
            key: "pokeball",
            repeat: 5,
            setXY: {
                x: Phaser.Math.Between(0, 180),
                y: Phaser.Math.Between(100, 200),
                stepX: 50,
            },
        });

        // Add the text to the scene
        const blinkingText = this.add.text(
            90,
            5,
            "Press space in grass to capture!",
            {
                fontSize: "16px",
                color: "#0000ff",
                backgroundColor: "#FFF",
            }
        );

        // Create a tween to make text flash
        this.tweens.add({
            targets: blinkingText,
            alpha: { from: 1, to: 0 }, // Switch between fully visible and invisible
            duration: 500, // Duration of each blink (in milliseconds)
            ease: "Linear", // Type of animation
            repeat: -1, // Repeat infinitely
            yoyo: true, // Returns the tween to its original state
        });

        this.pokeballs.children.iterate((pokeball) => {
            pokeball.setOrigin(0.5, 0.5);
            pokeball.body.setSize(20, 20);
        });

        this.money = this.add.text(20, 20, "Pokéballs: " + this.coins, {
            fontFamily: "Quicksand",
            fontSize: "16px",
            color: "#101010",
            fontStyle: "normal",
            strokeThickness: 2,
        });

        this.physics.add.overlap(
            this.player,
            this.pokeballs,
            this.collectPokeball,
            null,
            this
        );
    }

    collectPokeball(player, pokeball) {
        this.coins += 1;
        this.money.setText("Pokéballs: " + this.coins);
        pokeball.destroy();
    }

    update() {
        if (this.finish === 6) {
            // Concatenate the captured Pokémon names
            const capturedList = this.pokemonCaptured
                .map((pokemon) => pokemon.name)
                .join("\n ");
            const capturedText = this.add.text(
                10,
                50,
                `Caught Pokémon:\n ${capturedList}`,
                {
                    fontSize: "16px",
                    color: "#000000",
                    backgroundColor: "#FFF",
                }
            );
            

            // Delay for 5 seconds before redirecting to the menu
            this.time.delayedCall(5000, () => {
                capturedText.destroy(); // Remove the message
                this.scene.start("Menu", { capturedPokemon: this.pokemonCaptured }); // Redirect to the menu
            });
        }

        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-100);
            this.player.setFlipX(false);
            this.player.anims.play("left", true);
        } else if (this.cursors.right.isDown) {
            this.player.setVelocityX(100);
            this.player.setFlipX(true);
            this.player.anims.play("left", true);
        } else if (this.cursors.down.isDown) {
            this.player.setVelocityY(100);
            this.player.setFlipX(true);
            this.player.anims.play("down", true);
        } else if (this.cursors.up.isDown) {
            this.player.setVelocityY(-100);
            this.player.anims.play("up", true);
        } else {
            this.player.setVelocityX(0);
            this.player.setVelocityY(0);
            this.player.anims.play("idle_down", true);
        }



        const inGrass = this.grassLayer && this.grassLayer.hasTileAtWorldXY(this.player.x, this.player.y);
        const currentTime = this.time.now;
        // 2 seconds delay to capture
        if (inGrass && this.coins > 0 && Phaser.Input.Keyboard.JustDown(this.cursors.space) && currentTime - this.lastCaptureAttempt > 2000) {
            this.lastCaptureAttempt = currentTime; 
            this.attemptCapture();
        }
    }

    attemptCapture() {
        const captureChance = Phaser.Math.Between(1, 10);
        this.finish++;
        if (captureChance > 4) {
            // 60% catch ratio
            this.capturePokemon();
        } else {
            // Catch failed
            const missText = this.add.text(130, 100, `You missed the capture!`, {
                fontFamily: "Quicksand",
                fontSize: "20px",
                color: "#ff0000",
                fontStyle: "bold",
                strokeThickness: 2,
            });

            this.time.delayedCall(1000, () => {
                missText.destroy();
            });
            this.coins -= 1;
            this.money.setText("Pokéballs: " + this.coins);
        }
    }

    capturePokemon() {
        const randomPokemon = Phaser.Utils.Array.GetRandom(this.pokemons);

/*
        // Save in local storage
        const capturedData = JSON.parse(localStorage.getItem("capturedPokemons")) || [];
        capturedData.push({ id: randomPokemon.id, name: randomPokemon.name });
        localStorage.setItem("capturedPokemons", JSON.stringify(capturedData));
*/


        const captureText = this.add.text(
            140,
            100,
            `You captured a ${randomPokemon.name}!`,
            {
                fontFamily: "Quicksand",
                fontSize: "20px",
                color: "#ff0000",
                fontStyle: "bold",
                strokeThickness: 2,
            }
        );

        this.time.delayedCall(1000, () => {
            captureText.destroy();
        });

        this.coins -= 1;
        this.money.setText("Pokéballs: " + this.coins);

        this.pokemonCaptured.push(randomPokemon);
    }
}