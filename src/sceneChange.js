import Phaser from "phaser";

export default class Change extends Phaser.Scene {
    constructor() {
        super("Change");
    }

    preload() {
        this.load.image("background", "assets/change.png");
    }

    create() {
        // Background image
        const background = this.add.image(this.scale.width / 2, this.scale.height, "background");
        background.setOrigin(0.5, 1);

        // Welcome text with animation
        const welcomeText = this.add.text(this.scale.width / 2, this.scale.height / 2, "Welcome to Safari Zone", {
            fontSize: "24px",
            color: "#FFFFFF",
            fontFamily: "Arial",
            fontStyle: "bold",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: { x: 10, y: 5 },
            align: "center",
        });
        welcomeText.setOrigin(0.5);

        // Text Animation
        this.tweens.add({
            targets: welcomeText,
            alpha: { from: 1, to: 0.5 },
            duration: 1000,
            ease: "Linear",
            repeat: -1,
            yoyo: true,
        });

        // Redirirect to Safari Zone
        this.time.delayedCall(2000, () => {
            this.scene.start("Safari");
        });
    }
}
