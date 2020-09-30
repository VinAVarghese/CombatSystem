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

    // Methods
    printCombat(){
        
    }

    isAlive(){

    }

    attack(opponent){

    }
}

module.exports = Character;