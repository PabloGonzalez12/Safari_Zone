import Phaser from "phaser";

export default class Inventory extends Phaser.Scene {
    constructor() {
        super("Inventory");
    }

    preload() {
        // Load the inventory background
        this.load.image("inventory_bg", "assets/inventory_background.png");

        // Preload Pokémon sprites (you can adjust the IDs based on your game)
        for (let i = 1; i <= 6; i++) {
            this.load.image(`pokemon_${i}`, `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`);
        }
    }

    create(data) {
        const { inventoryPokemons } = data; // Destructure the inventoryPokemons data passed to the scene

        // Set the inventory background image
        this.add.image(240, 160, "inventory_bg").setOrigin(0.5);

        // Add the inventory title
        this.add.text(240, 20, "Pokémon Inventory", {
            fontSize: "18px",
            color: "#ffffff",
            fontStyle: "bold",
        }).setOrigin(0.5);

        // Design the layout (up to 6 Pokémon, in two rows)
        const maxColumns = 3; // Maximum columns per row
        const offsetX = 120;  // Horizontal spacing
        const offsetY = 100;  // Vertical spacing
        const startX = 80;    // Starting X position
        const startY = 60;    // Starting Y position

        inventoryPokemons.forEach((pokemon, index) => {
            const row = Math.floor(index / maxColumns); // Calculate the row
            const col = index % maxColumns;            // Calculate the column

            const x = startX + col * offsetX; // X coordinate based on column
            const y = startY + row * offsetY; // Y coordinate based on row

            // Display Pokémon sprite
            this.add.image(x, y, `pokemon_${pokemon.id}`).setScale(1).setOrigin(0.5);

            // Display Pokémon name below the sprite
            this.add.text(x, y + 50, pokemon.name, {
                fontSize: "12px",
                color: "#ffffff",
            }).setOrigin(0.5);
        });

        // Instruction to exit the inventory and go back to the menu
        this.add.text(240, 300, "Press ESC to return", {
            fontSize: "14px",
            color: "#ffffff",
        }).setOrigin(0.5);

        // Event to go back to the main menu when ESC is pressed
        this.input.keyboard.on("keydown-ESC", () => {
            this.scene.start("Menu");
        });
    }
}
