import Phaser from "phaser";

export default class Inventory extends Phaser.Scene {
    constructor() {
        super("Inventory");
    }

    preload() {
        this.load.image("inventory_bg", "assets/inventory_bg.png"); 
        // Preload Pokémon sprites (generic IDs for illustration)
        for (let i = 1; i <= 6; i++) {
            this.load.image(`pokemon_${i}`, `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`);
        }
    }

    create(data) {
        const { inventoryPokemons } = data;

        // Background image
        const background = this.add.image(this.scale.width / 2, this.scale.height, "inventory_bg");
        background.setOrigin(0.5, 1);

        // Title
        this.add.text(240, 20, "Pokémon Inventory", {
            fontSize: "24px",
            color: "#000",
            fontStyle: "bold",
            backgroundColor: "rgba(0, 255, 255, 0.7)",
            stroke: "#fff",
            strokeThickness: 2,
            shadow: { offsetX: 2, offsetY: 2, color: "#000", blur: 3, fill: true }
        }).setOrigin(0.5);


        this.add.text(10, 290, "Press ESC to return to the menu", {
            fontSize: "16px",
            color: "#FFFFFF",
            fontFamily: "Arial",
            fontStyle: "bold",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: { x: 10, y: 5 },
            align: "center",
        });


        // Menu layout (arranged in two rows)
        const maxColumns = 3;
        const offsetX = 140; // Space between columns
        const offsetY = 120; // Space between rows
        const startX = 100; // Initial X position
        const startY = 80; // Initial Y position

        inventoryPokemons.forEach((pokemon, index) => {
            const row = Math.floor(index / maxColumns); // Current row
            const col = index % maxColumns; // Current column

            const x = startX + col * offsetX;
            const y = startY + row * offsetY;

            // Pokémon sprite
            this.add.image(x, y, `pokemon_${pokemon.id}`).setScale(0.6).setOrigin(0.5);

            // Pokémon name
            this.add.text(x, y + 50, pokemon.name, {
                fontSize: "16px",
                color: "#000",
                fontStyle: "bold",
                stroke: "#fff",
                strokeThickness: 2,
                shadow: { offsetX: 1, offsetY: 1, color: "#000", blur: 2, fill: true }
            }).setOrigin(0.5);
        });

        // Instruction to exit
        this.add.text(400, 550, "Press ESC to return", {
            fontSize: "18px",
            color: "#ffffff",
        }).setOrigin(0.5);


        this.add.text(400, 550, "Press ESC to return", {
            fontSize: "18px",
            color: "#ffffff",
            stroke: "#000",
            strokeThickness: 2,
            shadow: { offsetX: 2, offsetY: 2, color: "#000", blur: 3, fill: true }
        }).setOrigin(0.5);

        // Event to return to the menu
        this.input.keyboard.on("keydown-ESC", () => {
            this.scene.start("Menu");
        });
    }
}
