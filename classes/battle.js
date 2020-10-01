class Battle {
    // Battle Constructor
    constructor(characters) {
        this.characters = characters;
    }

    // Battle Method
    start = () => {
        const turnInterval = setInterval(() => {
            // Redefining the instance array of characters
            let chars = this.characters

            // Each character attacks a random opponent
            for(let i = 0; i < chars.length; i++){
                // Chararacter 
                (chars[i])
                // Must fight() a Math.floor(Math.random()*chars.length) in the array but not itself

                // Check to see if character alive
                    // If dead, remove from chars array

                // Check if chars is down to one, if so, return winner and clearInterval()
            }
        }, 2000);
    }
}

module.exports = Battle;