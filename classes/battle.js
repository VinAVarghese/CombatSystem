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
        console.log("-------------------------------");
        console.log("^^^^^^^^^^CHARACTERS^^^^^^^^^^");
        console.log("-------------------------------");
    }

    start(){
        // Redefining the instance array of characters
        let chars = this.characters;

        const turnInterval = setInterval(() => {
            // Each character attacks a random opponent
            for(let i = 0; i < chars.length; i++){        
            // Character picks random opponent and not themself
                let possibleOpps = chars.filter((opp) => {if (opp != chars[i]){return opp}});
                let randomChar = possibleOpps[Math.floor(Math.random()*possibleOpps.length)];

            // Character fights opponent
                chars[i].fight(randomChar);

            // Check if both characters are still alive 
                if (!chars[i].isAlive()){
                // Print defeat
                    // chars[i].isAlive();
                // Remove defeated character from chars array
                    chars.splice(i,1)
                } else if (!randomChar.isAlive()) {
                // Print defeat
                    // randomChar.isAlive();
                // Remove defeated character from chars array
                    let index = chars.indexOf(randomChar);
                    chars.splice(index,1);
                }

            // Check if chars is down to one, if so, end() and clearInterval()
                chars.length === 1
                ?this.end(chars)
                &clearInterval(turnInterval)
                :null;
            }
        }, 2000);
    }

    end(remainingArr){
        console.log("******************************************");
        console.log(`BATTLE OVER: ${remainingArr[0].name} Wins!`);
        console.log("******************************************");
    }
}

module.exports = Battle;