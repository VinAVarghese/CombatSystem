const Character = require("../classes/Character");
const Weapon = require("../classes/Weapon");

// ADD/EDIT WEAPONS
// Instances of Weapon
const Sai = new Weapon("Sai", 18, 4),
const Nunchaku = new Weapon("Nunchaku", 13, 3),
const Katanas = new Weapon("Twin Katana", 20, 7),
const Bo = new Weapon("Bo", 17, 9)

// ADD/EDIT CHARACTERS & EQUIP WEAPON
// Instances of Character
const Raphael = new Character("Raphael", 100, Sai),
const Michelangelo = new Character("Michelangelo", 100, Nunchaku),
const Leonardo = new Character("Leonardo", 100, Katanas),
const Donatello = new Character("Donatello", 100, Bo)