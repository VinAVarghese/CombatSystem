const Battle = require("./classes/battle");
const characters = require("./game/setup");

// Initialize a new Battle object
const battle = new Battle(characters);

// Starting battle
battle.start();
