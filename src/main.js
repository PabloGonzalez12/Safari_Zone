import Phaser from "phaser";

import Menu from "./menu";
import Safari from './safari';
import Change from './sceneChange';
import Inventory from './inventory';

const config = {
  type: Phaser.AUTO,
  parent: "app",
  width: 480,
  height: 320,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: true,
    },
  },
  scene: [Menu, Change, Safari, Inventory],
};


export default new Phaser.Game(config);