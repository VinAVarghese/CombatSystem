# CombatSystem
  CombatSystem is a Node CLI that uses OOP. When executed the application runs through a battle where characters lock on to a random opponent, weapon speeds are compared, and damage is given accordingly. The game's interval continues until there is only one victorious character remaining. 

  ## Usage
  In the setup.js file, characters, and their equipped weapons, can be added to and/or their statistics edited. Classes take care of the rest of the functionality and logic.

  ## Dependency
    $ Node.js 

  ## Initialize
    $ node index.js 

  ## Future Expansion
  How would your code change if weapons had range?
  A: If we added a range stat to weapons I would also add a distance stat to characters. This could be a randomly changing value (simulating characters moving during battle) that would be compared to the range of the weapon and if within range (i.e. charDistance < weaponRange) it would register a successful attack.

  How would your code change if weapons had special effects, like the ability to make targets catch fire?
  A: If weapons had special effects, a successful attack would register additional damage overtime. To code this I could add an "affected" boolean to each character and set it to true when hit with a special effect weapon. "True" would decrease the character's health each turn regardless if they were hit again or not simulating a burn or poison. 

  How might this system be incorporated into a larger items and inventory system?
  A: Character templates and weapon templates that are exampled in the setup.js file can be stored in a large inventory and swapped out for what should be used in each battle instance. Victories can earn specific characters points that would gain them access to stronger weapon sets in the larger inventory. 

  
  ## Contact
  * Email: [vinavarghese@gmail.com](mailto:vinavarghese@gmail.com)
  Feel free to email with any suggestions, questions, or comments with the subject line "RE: CombatSystem". 
  Thank you! 
