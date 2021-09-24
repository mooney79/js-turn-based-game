/* 
I'm moving game logic to this file so we can have it not cluttering up the main. 
When we reach the point where we can use it, we can copy it into the main.

And once this file is empty, we can remove the dependency in index.html
*/


///// RANDOM NUMBER GENERATORS /////
function generatePercentage(){
    return (Math.floor(Math.random() * 100)+1);    
}

function generateDamage(damageMod){  
    return (Math.floor(Math.random() *2) +1 + damageMod);
}

//////////// CLASSES ////////////
class Scoundrel {
    constructor() {
      this.name = 'Scoundrel';
      this.health = 8;
      this.baseMove = "shootBlaster"
      this.specialMove = "hide";
      this.accuracyPercent = 85;
      this.score = 0;  
    }
    shootBlaster(){
        if(generatePercentage() < this.accuracyPercent) {    
            let damageMod = 1;    
            let damage = generateDamage(damageMod);
            enemy.health -= damage;
            return `The ${this.name} hits the ${enemy.name} for ${damage} damage!`
        } else {
            return `The ${this.name}'s blaster shot misses the enemy!`;
        }
    }
    hide(){
        console.log(`The ${this.name} hides from the enemy! To be implemented`);
    }
}

  
class SithLord {
    constructor() {
        this.name = 'Sith Lord';
        this.health = 10;
        this.id = 1;
        this.encounterChance = 20;
        this.basicMove = "lightsaberAttack";
        this.specialMove = "shootLightning";
        this.specialMoveChance = 15;
        this.accuracyPercent = 80;
        this.score = 350;
    }
    selectAttack(){
        if(generatePercentage() < this.specialMoveChance){
            let damageMod = 3;   
            return this.shootLightning(damageMod);
        } else {
            let damageMod = 1;    
            return this.lightsaberAttack(damageMod);
        }
    }
    lightsaberAttack(damageMod){
        if(generatePercentage() < this.accuracyPercent) {    
            let damage = generateDamage(damageMod);
            hero.health -= damage;
            return `The ${this.name} hits the ${hero.name} for ${damage} damage!`
        } else {
            return `The ${this.name}'s lightsaber swing misses the hero!`;
        }
    }
    shootLightning(damageMod){
        if(generatePercentage() < this.accuracyPercent - 30) {     
            let damage = generateDamage(damageMod);
            hero.health -= damage;
            return `The ${this.name} blasts the ${hero.name} with lightning, inflicting ${damage} damage!`
        } else {
            return `The ${this.name}'s lightning is dodged by the ${hero.name}!`;
        }
    }
}

class Dragon {
    constructor() {
        this.id = 0;
        this.name = "Dragon";
        this.health = 15;
        this.encounterChance = 15;
        this.basicMove = "clawsAndBite";
        this.specialMove = "breathfire";
        this.specialMoveChance = 15;
        this.accuracyPercent = 90;
        this.score = 500;
    }
    selectAttack(){
        if(generatePercentage() < this.specialMoveChance){
            let damageMod = 3;   
            return this.breathFire(damageMod);
        } else {
            let damageMod = 2;    
            return this.clawsAndBite(damageMod);
        }
    }
    clawsAndBite(damageMod){
        if(generatePercentage() < this.accuracyPercent-40) {    
            let damage = generateDamage(damageMod);
            hero.health -= damage;
            return `The ${this.name} claws and bites the ${hero.name} for ${damage} damage!`
        } else {
            return `The ${this.name}'s wild attacks miss the hero!`;
        }
    }
    breathFire(damageMod){
        if(generatePercentage() < this.accuracyPercent - 60) {     
            let damage = generateDamage(damageMod);
            hero.health -= damage;
            return `The ${this.name} blasts the ${hero.name} with its fiery breath, inflicting ${damage} damage!`
        } else {
            return `The ${this.name}'s fiery breath is dodged by the ${hero.name}!`;
        }
    }
  }




//Depending on which button is picked from dropdown, determine 
//which Class hero becomes
let hero = new Scoundrel;   

//Enemy encounter rates to be implemented once
//additional enemies are put in the game.

function pickEnemy(){
    let randomNumber = generatePercentage();
    if (randomNumber > 50) {
        console.log('The hero encountered a Dragon!');
        return new Dragon;
    } else {
        console.log('The hero encountered a hooded figure!');
        return new SithLord;
    }
}

let enemy = pickEnemy();
console.log(hero.shootBlaster());
console.log(enemy.selectAttack());
console.log(`Hero: ${hero.health}, Enemy:${enemy.health}`);
console.log(hero.shootBlaster());
console.log(enemy.selectAttack());
console.log(`Hero: ${hero.health}, Enemy:${enemy.health}`);


function onEnemyDeath(){
    hero.score += enemy.score;
    enemy = pickEnemy();
    
}

function onHeroDeath(){
    console.log(`You died!  Your final score was: ${hero.score}`);
    //Create API to fetch and push hero score for screen on game over
    console.log('Refresh and choose a new hero to try again!');
}





function fetchScore() {
    fetch('https://tiny-taco-server.herokuapp.com/tbscore/')
    .then(response => response.json())
    .then(data => {
        // data["timestamp"].sort();
        // data.forEach(createElement)});
        console.log(data);
    })
}

/*

*/
//For testing
//hero.score = 400;

function uploadScore(){
    const outgoingScore = hero.score;
    const player = prompt(`Congratulations!  Your score was ${hero.score}. Enter your name:`);
    let sentPacket = {
        player: player,
        hero: hero.name,
        score: outgoingScore,
    }
    fetch('https://tiny-taco-server.herokuapp.com/tbscore/', {
            method: 'POST',
            headers: {
             'Content-Type': 'application/json',
            },
            body: JSON.stringify(sentPacket),
        })
        .then(response => {
            if(!response.ok) {
                throw new Error('Ooops! Something went wrong!')
            }
            return response.json();
        })
        .then(data => console.log(data))
        .catch(error=> console.log('Error: ', error)) // catches errors if detected
       
} 



/*

*/



/////// LOGIC TREES //////
//variable names and such need to be re-tooled to accomodate
//the class structure


/*
////// RE-TOOL TO ACCOMODATE ENCOUNTER CHANCE, then "let enemy = new Whatever"
let monsterIndex = 0;
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

//////// SHOULD BE BUILT INTO ENEMY CLASSES
function enemyAttack(enemy){
    if(generatePercentage() < exampleVillainArray[monsterIndex].hitChance) {        
        let damage = generateDamage();
        exampleHero.health -= damage;
        return `The hero was hit by the ${exampleVillainArray[monsterIndex].name} for ${damage} damage!`
    } else
        return `The ${exampleVillainArray[monsterIndex].name} missed his attack!`;
}

//////// SHOULD BE BUILT INTO HERO CLASSES
function heroAttack(hero){
    if(generatePercentage() < exampleHero.hitChance) {        
        let damage = generateDamageHero();
        exampleVillainArray[monsterIndex].health -= damage;
        return `The ${exampleHero.name} hero hit by the ${exampleVillainArray[monsterIndex].name} for ${damage} damage!`
    } else
        return `The ${exampleHero.name} hero missed his attack!`;
}


///// AUTOMATES THE FIGHTS.  GOOD FOR TESTING, NOT FOR PLAY.
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
*/