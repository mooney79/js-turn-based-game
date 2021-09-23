class Character {
  //Basic stats?
}

class Hero extends Character {
  //Array of Hero types
  //Accuracy
  //Health
}

class Jedi extends Hero {
  //Jedi stats plus moves
  //Name
  //Any modifiers
  //Any moves
}

class Scoundrel extends Hero {
  //Scoundrel stats plus moves
  //Name
  //Any modifiers
  //Any moves
}

class Alien extends Hero {

  constructor() {
    this.stats = stats;
    this.name = 'Alien';
    this.health = 12;
    this.encounterChance = 25;
    this.specialMove = "beatWithClub";
    this.accuracyPercent = 75;  }
  //Alien stats plus moves
  //Name
  //Any modifiers
  //Any moves
}

class Enemy extends Character {
  //Methods for NPC attacks?
  // Stats?
  //Do we extend classes for each bad guy?
  //Bad guy list: grunt/Stormtroopers, Darth Maul-type, krayt dragon
  //Kat calls dragon
}

class Dragon extends Enemy {
  // what makes up a Dragon?
  // attack =>
  // breathesFire
  // defeats Hero
  constructor() {
      this.id = 0;
      this.name = "Dragon";
      this.health = 15;
      this.encounterChance = 15;
      this.specialMove = "breathfire";
      this.accuracyPercent = 90;
  }

}

//****BACKUP !!! POSSIBLY HAVE HERO & ENEMY ARRAYS INSTEAD OF CLASSES HERE */
const heroesArray = [{

}]

const enemiesArray = [{

},
  {

  }
]

class Grunt extends Enemy {

}

class Sith extends Enemy {

}

class Game {

}

/* Basic Mechanics
Health pools: 500 (modify by Hero and Enemy Types)
Option: 10
Avg swings to bring down an enemy: 10
Avg accuracy: 75%
Avg damage/swing: about 65/1
Up to 25% variance for specialties
    Exceptions: grunts should be easy to kill, dragon a real challenge

Assignments:
Kat -- Alien, Dragon breathes fire!
Nathan -- Jedi, Stormtrooper
Sam -- Scoundrel, Sith Lord -- enemy attack logic

Enemy -- Change to something like

enemyArray = [{id: 0, name: "dragon", health: 1000,
            encounterChance: 15, specialMove: breathfire},
        {}]

Can we target the DOM and make Hero shake when damage is inflicted
on him?
Can each "attack" trigger a simple animation?

Today:
Basic logic, basic layout, basic class construction
Friday:
Ideally: to have functioning if ugly game
Saturday:
special attacks and begin connecting game to the UI
Sunday:
Finish connecting the game to the UI and tuning balance

ACHIEVEMENT UNLOCKED:

Maybe look into APIs and see if they can benefit us with this?


*/

const exampleVillainArray = 
    [{name: 'Stormtrooper',
    hitChance: 35,
    damageModifier: 0,
    health: 3, 
    },
    {name: 'Dragon',
    hitChance:60,
    damageModifier: 3,
    health: 15}];

const exampleHero = {
    name: 'Jedi',
    hitChance: 75,
    damageModifier:1,
    health: 10,
}

let monsterIndex = 0;
// let heroHealth = 10;



function generatePercentage(){
    return (Math.floor(Math.random() * 100)+1);    
}

function generateDamage(){  //Needs to eventually pass in either hero or villain 
                            // to dynamically grab damageModifier
    let damageMod = exampleVillainArray[monsterIndex].damageModifier;
    return (Math.floor(Math.random() *2) +1 + damageMod);
}

function generateDamageHero(){  //Needs to eventually pass in either hero or villain 
    // to dynamically grab damageModifier
let damageMod = exampleHero.damageModifier;
return (Math.floor(Math.random() *2) +1 + damageMod);
}

function pickEnemy(){
    let randomNumber = generatePercentage();
    if (randomNumber > 90) {
        monsterIndex = 1;
        console.log(`The hero encountered a ${exampleVillainArray[monsterIndex].name}`)
    } else {
        monsterIndex = 0;
        console.log(`The hero encountered a ${exampleVillainArray[monsterIndex].name}`)
    } return monsterIndex;
}

function enemyAttack(enemy){
    if(generatePercentage() < exampleVillainArray[monsterIndex].hitChance) {        
        let damage = generateDamage();
        exampleHero.health -= damage;
        return `The hero was hit by the ${exampleVillainArray[monsterIndex].name} for ${damage} damage!`
    } else
        return `The ${exampleVillainArray[monsterIndex].name} missed his attack!`;
}

function heroAttack(hero){
    if(generatePercentage() < exampleHero.hitChance) {        
        let damage = generateDamageHero();
        exampleVillainArray[monsterIndex].health -= damage;
        return `The ${exampleHero.name} hero hit by the ${exampleVillainArray[monsterIndex].name} for ${damage} damage!`
    } else
        return `The ${exampleHero.name} hero missed his attack!`;
}

pickEnemy();
while (exampleHero.health > 0){
    console.log(heroAttack());
    console.log(`${exampleVillainArray[monsterIndex].name}  has ${exampleVillainArray[monsterIndex].health}  remaining!`);
    if (exampleVillainArray[monsterIndex].health > 0) {
        console.log(enemyAttack());
    } else {
        console.log(`${exampleVillainArray[monsterIndex].name} is dead and can't attack`);
    }
    console.log(`Hero has ${exampleHero.health} remaining!`);
    if (exampleVillainArray[monsterIndex].health <= 0) {
        exampleVillainArray[monsterIndex].health = 3;
        pickEnemy();
    }
    
}
