class Weapon {
    // Weapon Constructor
    constructor (type, damage, atkSpeed){
        // Ensure constructing props passed
        if (!type) throw new Error("What is the weapon type?");
        if (!damage) throw new Error("Please enter weapon's damage amount.");
        if (!atkSpeed) throw new Error("What is the weapon's attack speed?");
        
        this.type = type;
        this.damage = damage;
        this.atkSpeed = atkSpeed;
    }   
}

