class Weapon {
    // Weapon Constructor
    constructor (type, damage, atkSpeed){
        // Ensure constructing props passed during setup
        if (!type) throw new Error("Please enter the weapon type.");
        if (!damage || damage < 1 || damage > 50) throw new Error("Please enter weapon's damage amount. Int between 1-50 (weak-strong).");
        if (!atkSpeed || atkSpeed < 1 || atkSpeed > 10) throw new Error("Please enter weapon's attack speed. Int between 1-10 (slow-fast).");
        
        this.type = type;
        this.damage = damage;
        this.atkSpeed = atkSpeed;
    }   
}

module.exports = Weapon;