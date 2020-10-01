class Battle {
    // Battle Constructor
    constructor(characters) {
        this.characters = characters;
    }

    // Battle Methods
    intro(){
        this.characters.forEach(character => {
            character.printInfo()
        })
    }

    start(){
        const turnInterval = setInterval(() => {
            // Redefining the instance array of characters
            let chars = this.characters;

            // Each character attacks a random opponent
            for(let i = 0; i < chars.length; i++){        
                // Character picks random opponent 
                    TODO: // chars[i] fight() a Math.floor(Math.random()*chars.length) in the array but not itself
                    TODO: // let randomChar = chars[Math.floor(Math.random()*chars.length)]
                    TODO: // chars[i].fight(randomChar);

                // Check to see if characters are alive 
                if (!chars[i].isAlive()){
                    TODO: // If dead, remove from chars array
                    
                    chars[i].isAlive();
                } else if (!randomChar.isAlive()) {
                    TODO: // If dead, remove from chars array

                    randomChar.isAlive();
                }

                // Check if chars is down to one, if so, return winner and clearInterval()
                TODO: // if(chars.length === 1){
                //     console.log(`Battle Over: ${char[0].name} Wins!`);
                //     clearInterval(turnInterval);
                // }
            }
        }, 2000);
    }
}

module.exports = Battle;