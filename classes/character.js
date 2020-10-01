class Character {
    // Character Constructor
    constructor (name, health, weapon){
        // Ensure constructing props passed during setup
        if (!name) throw new Error("Please enter the character's name.");
        if (!health) throw new Error("Please enter character's health.");
        if (!weapon) throw new Error("Please equip a weapon.");
        
        this.name = name;
        this.health = health;
        this.weapon = weapon;
    }

    // Character Methods
    printInfo(){
        // Print character stats
        console.log("------------------------------");
        console.log("--------NEW CHARACTER--------");
        console.log(`${this.name} joins the battle!`);
        console.log(`Health: ${this.health}`);
        console.log(`Weapon: ${JSON.stringify(this.weapon)}.`);
        // console.log(`Weapon damage: ${this.weapon.damage}.`);
        // console.log(`Weapon attack speed: ${this.weapon.atkSpeed}.`);
    }

    isAlive(){
        // Check health, print if defeated
        if (this.health <= 0) {
            console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
            console.log(`${this.name} has been defeated!`);
            console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
            return false;
        }
        return true;
    }

    fight(opponent){
        // Opponent's attack speeds compared, quickest deals damage
        if (this.weapon.atkSpeed > opponent.weapon.atkSpeed){
            console.log("-------------------------------");
            console.log(`${this.name} hits ${opponent.name} first for ${this.weapon.damage}`);
            opponent.health -= this.weapon.damage;
            console.log(`${opponent.name}'s remaining health: ${opponent.health}`);
            console.log("<>");
            console.log(`${opponent.name} hits ${this.name} back for ${opponent.weapon.damage}`);
            this.health -= opponent.weapon.damage;
            console.log(`${this.name}'s remaining health: ${this.health}`);
            console.log("-------------------------------");
        } else {
            console.log("-------------------------------");
            console.log(`${opponent.name} counters ${this.name}'s attack for ${opponent.weapon.damage}`);
            this.health -= opponent.weapon.damage;
            console.log(`${this.name}'s remaining health: ${this.health}`);
            console.log("<>");
            console.log(`${this.name} hits ${opponent.name} back for ${this.weapon.damage}`);
            opponent.health -= this.weapon.damage;
            console.log(`${opponent.name}'s remaining health: ${opponent.health}`);
            console.log("-------------------------------");
        }
    }
}

module.exports = Character;