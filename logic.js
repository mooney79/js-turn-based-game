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

//////////// HERO CLASSES ////////////
class Scoundrel {
    constructor() {
      this.name = 'Scoundrel';
      this.health = 8;
      this.healthMax = 8;
      this.basicMove = "Shoot blaster"
      this.specialtyMove = "Hide";
      this.accuracyPercent = 85;
      this.score = 0;  
    }
    baseMove(){
        if(generatePercentage() < this.accuracyPercent) {    
            let damageMod = 1;    
            let damage = generateDamage(damageMod);
            enemy.health -= damage;
            return `The ${this.name} hits the ${enemy.name} for ${damage} damage!`
        } else {
            return `The ${this.name}'s blaster shot misses the enemy!`;
        }
    }
    specialMove(){
        console.log(`The ${this.name} hides from the enemy! To be implemented`);
    }
}


class Alien {
    constructor() {
      this.name = 'Alien';
      this.health = 12;
      this.healthMax = 12;
      this.basicMove = "Swing Club";
      this.specialtyMove = "Regenerate";
      this.accuracyPercent = 75;
      this.score = 0;  
    } 
    baseMove(){
        if(generatePercentage() < this.accuracyPercent) {    
            let damageMod = 1;    
            let damage = generateDamage(damageMod);
            enemy.health -= damage;
            return `The ${this.name} hits the ${enemy.name} with a giant clubfor ${damage} damage!`
        } else {
            return `The ${this.name}'s club only grazes the ${enemy.name}!`;
        }
    }
    specialMove(){
        hero.health += 5;
        if (hero.health > 12) {
            hero.health = 12;
        }
        console.log(`The ${this.name} summons his inner reserves shakes off some damage.`);
    }
}

class Jedi {
    constructor() {
        this.name = 'Jedi';
        this.health = 10;
        this.basicMove = 'Force Push';
        this.specialtyMove = 'Saber Flurry';
        this.accuracyPercent = 95;
        this.score = 0;
    }
    baseMove(){
        if(generatePercentage() < this.accuracyPercent){
            let damageMod = 1;
            let damage = generateDamage(damageMod);
            enemy.health -= damage;
            return `The ${hero.name} used the force and dealt ${damage} damage!`;
        } else {
            return `The force was not strong enough in this young ${hero.name}...`;
        }
    }
    specialMove(){
        if(generatedPercentage() < this.accuracyPercent - 15){
            let damageMod = 3;
            let damage = generatedDamage(damageMod);
            enemy.health -= damage;
            return `The ${hero.name} swings his lightsaber in a flurry dealing ${damage} damage!`;
        } else {
            return `The so called ${hero.name} should learn to land at least one hit.`;
        }
    }
}

  


//////////// ENEMY CLASSES ////////////
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
 
class StormTrooper {
    constructor() {
        this.id = 2;
        this.name = "StormTrooper";
        this.health = 8;
        this.encounterChance = 65;
        this.basicMove = "shootBlindly";
        this.specialMove = "blastBlindly";
        this.specialMoveChance = 35;
        this.accuracyPercent = 10;
        this.score = 100;
    }
    selectAttack(){
        if(generatePercentage() < this.specialMoveChance){
            let damageMod = 2;
            return this.blastBlindly(damageMod);
        } else {
            let damageMod = 1;
            return this.shootBlindly(damageMod);
        }
    }
    shootBlindly(damageMod){
        if(generatePercentage() < this.accuracyPercent){
            let damage = generateDamage(damageMod);
            hero.health -= damage;
            return `The ${this.name} somehow hit ${hero.name}, dealing ${damage} damage!`
        }   else {
            return `The ${this.name} needs to work on his aim`;
        }
    }
    blastBlindly(damageMod){
        if(generatePercentage() < this.accuracyPercent + 40) {
            let damage = generateDamage(damageMod);
            hero.health -= damage;
            return `The ${this.name} landed at least 1 shot in the dark on the ${hero.name}, dealing ${damage} damage!`
        } else {
            return `The ${this.name} shot everything but the ${hero.name}!`;
        }
    }
}



//Depending on which button is picked from dropdown, determine 
//which Class hero becomes
//Add event listener, on click set hero to button value(manually?), then launch game
//routine..
let hero = new Scoundrel;
let enemy = new StormTrooper;   

//Enemy encounter rates to be implemented once
//additional enemies are put in the game.

function pickEnemy(){
    let randomNumber = generatePercentage();
    if (randomNumber < 15) {
        console.log('The hero encountered a Dragon!');
        return new Dragon;
    } else if (randomNumber < 35) {
        console.log('The hero encountered a hooded figure!');
        return new SithLord;
    } else {
        console.log('The hero ran into a Stormtrooper!');
        return new StormTrooper;
    }
}




// let enemy = pickEnemy();
// console.log(hero.shootBlaster());
// console.log(enemy.selectAttack());
// console.log(`Hero: ${hero.health}, Enemy:${enemy.health}`);
// console.log(hero.shootBlaster());
// console.log(enemy.selectAttack());
// console.log(`Hero: ${hero.health}, Enemy:${enemy.health}`);



//////// CALLS ON DEATHS ////////
function onEnemyDeath(){
    hero.score += enemy.score;
    enemy = pickEnemy();
    
}

function onHeroDeath(){
    console.log(`You died!  Your final score was: ${hero.score}`);
    //Create API to fetch and push hero score for screen on game over
    console.log('Refresh and choose a new hero to try again!');
}



///// SCOREBOARD/API STUFF

function fetchScore() {
    fetch('https://tiny-taco-server.herokuapp.com/tbscore/')
    .then(response => response.json())
    .then(data => {
        // data["timestamp"].sort();
        // data.forEach(createElement)});
        console.log(data);
    })
}

//hero.score = 400;  //for testing

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


/////////////HERO CONTROL BUTTONS////////////
/////// DOM SELECTORS //////
const $attackButton = document.getElementById("attack-button");
$attackButton.innerHTML = hero.basicMove;
const $specialButton = document.getElementById("special-button");
$specialButton.innerHTML = hero.specialtyMove;
const $healthBar = document.getElementById("health");
$healthBar.value = 100;
// $jediButton = document.getElementById("jedi-dropdown");
// $alienButton = document.getElementById("alien-dropdown");
// $scoundrelButton = document.getElementById("scoundrel-dropdown");
$charSelect = document.getElementById("change-character");

/////// EVENT LISTENERS ///////
$attackButton.addEventListener("click", () => {
    console.log(hero.baseMove());  
    setTimeout(() => {console.log(enemy.selectAttack());
        $healthBar.value = (hero.health/hero.healthMax)*100;}, 1000);    
    });
$specialButton.addEventListener("click", () => {
    console.log(hero.specialMove());  
    setTimeout(() => {console.log(enemy.selectAttack());
        $healthBar.value = (hero.health/hero.healthMax)*100;}, 1000);    
    });



//Switch statement to get value of drop down items?    
// $jediButton.addEventListener("click", () => {
//     hero = new Jedi;
//     enemy  = pickEnemy();
//     console.log('Jedi clicked');
// });
// $alienButton.addEventListener("click", () => {
//     hero = new Alien;
//     enemy  = pickEnemy();
// });
// $scoundrelButton.addEventListener("click", () => {
//     hero = new Alien;
//     enemy  = pickEnemy();
// });

$charSelect.addEventListener("change", selectHero);

function selectHero(event){
    if (menu.value == '1') {
        hero = new Jedi;
        enemy  = pickEnemy();
      } else if (menu.value == '2') {
        hero = new Scoundrel;
        enemy  = pickEnemy();
      } else if (menu.value == '3') {
        hero = new Alien;
        enemy  = pickEnemy();
      }
}
/*
var menu = document.getElementById("change_chart");
menu.addEventListener("change", generateData);

function generateData(event) {
  if (menu.value == '1') {
    alert(1);
  } else if (menu.value == '2') {
    alert(2);
  } else if (menu.value == '3') {
    alert(3);
  }
}
<select id="change_chart">
    <option value="1" selected>livejournal</option>
    <option value="2">librarybooks</option>
    <option value="3">sunspots</option>
</select>
*/



/////// LOGIC TREES //////
//variable names and such need to be re-tooled to accomodate
//the class structure


/*

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
while (hero.health > 0){
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