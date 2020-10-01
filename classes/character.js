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
    printCombat(){
        
    }

    isAlive(){

    }

    fight(opponent){
        // Opponent's attack speeds compared and quickest hits
        if (this.weapon.atkSpeed > opponent.weapon.atkSpeed){
            console.log(`${this.name} hit ${opponent.name} for ${this.weapon.damage}`);
            opponent.health -= this.weapon.damage;
        } else {
            console.log(`${opponent.name} hit ${this.name} for ${opponent.weapon.damage}`);
            this.health -= opponent.weapon.damage;
        }
    }
}

module.exports = Character;