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
      this.hide = false;
      this.hideCounter = 0;
      this.hideCoolDown = 0;
    }
    baseMove(){
        if(generatePercentage() < this.accuracyPercent) {
            let damageMod = 1;
            let damage = generateDamage(damageMod);
            enemy.health -= damage;
            if (this.hideCoolDown > 0) {
                this.hideCoolDown -= 1;
            }
            // console.log(`Cooldown: ${this.hideCoolDown}`)
            return `The ${this.name} hits the ${enemy.name} for ${damage} damage!<br>`
        } else {
            return `The ${this.name}'s blaster shot misses the enemy!<br>`;
        }
    }
    specialMove(){
        this.hide = true;
        this.hideCounter = 3;
        if (this.hideCoolDown > 0) {
                this.hideCoolDown -= 1;
            return `You're exposed for ${this.hideCoolDown+1} more turns!<br>`;
        }
        return `The ${this.name} hides from the enemy! They will miss their next three attacks!<br> After that, you will be exposed for 3 turns and unable to hide!<br>`;
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
      this.hide = false;
    }
    baseMove(){
        if(generatePercentage() < this.accuracyPercent) {
            let damageMod = 1;
            let damage = generateDamage(damageMod);
            enemy.health -= damage;
            return `The ${this.name} hits the ${enemy.name} with a giant club for ${damage} damage!<br>`
        } else {
            return `The ${this.name}'s club only grazes the ${enemy.name}!<br>`;
        }
    }
    specialMove(){
        this.health += 5;
        if (this.health > 12) {
            this.health = 12;
        }
        return `The ${this.name} summons his inner reserves shakes off some damage.<br>`;
    }
}

class Jedi {
    constructor() {
        this.name = 'Jedi';
        this.health = 10;
        this.healthMax = 10;
        this.basicMove = 'Force Push';
        this.specialtyMove = 'Saber Flurry';
        this.accuracyPercent = 95;
        this.score = 0;
        this.hide = false;
    }
    baseMove(){
        if(generatePercentage() < this.accuracyPercent){
            let damageMod = 1;
            let damage = generateDamage(damageMod);
            enemy.health -= damage;
            return `The ${hero.name} used the force and dealt ${damage} damage!<br>`;
        } else {
            return `The force was not strong enough in this young ${hero.name}...<br>`;
        }
    }
    specialMove(){
        if(generatePercentage() < this.accuracyPercent - 15){
            let damageMod = 3;
            let damage = generateDamage(damageMod);
            enemy.health -= damage;
            return `The ${hero.name} swings his lightsaber in a flurry dealing ${damage} damage!<br>`;
        } else {
            return `The so called ${hero.name} should learn to land at least one hit.<br>`;
        }
    }
}




//////////// ENEMY CLASSES ////////////
class SithLord {
    constructor() {
        this.name = 'Sith Lord';
        this.health = 10;
        this.healthMax = 10;
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
        if((generatePercentage() < this.accuracyPercent) && hero.hide === false) {
            let damage = generateDamage(damageMod);
            hero.health -= damage;
            return `The ${this.name} hits the ${hero.name} for ${damage} damage!<br>`
        } else {
            if (hero.hide === true){
                hero.hideCounter -= 1;
                if (hero.hideCounter === 0){
                    hero.hide = false;
                    hero.hideCoolDown = 3;
                }
            }
            return `The ${this.name}'s lightsaber swing misses the hero!<br>`;
        }
    }
    shootLightning(damageMod){
        if((generatePercentage() < this.accuracyPercent - 30) && hero.hide === false ){
            let damage = generateDamage(damageMod);
            hero.health -= damage;
            return `The ${this.name} blasts the ${hero.name} with lightning, inflicting ${damage} damage!<br>`
        } else {
            if (hero.hide === true){
                hero.hideCounter -= 1;
                if (hero.hideCounter === 0){
                    hero.hide = false;
                    hero.hideCoolDown = 3;
                }
            }
            return `The ${this.name}'s lightning is dodged by the ${hero.name}!<br>`;
        }
    }
}

class Dragon {
    constructor() {
        this.id = 0;
        this.name = "Dragon";
        this.health = 15;
        this.healthMax = 15;
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
        if((generatePercentage() < this.accuracyPercent-40) && hero.hide === false)  {
            let damage = generateDamage(damageMod);
            hero.health -= damage;
            return `The ${this.name} claws and bites the ${hero.name} for ${damage} damage!<br>`
        } else {
            if (hero.hide === true){
                hero.hideCounter -= 1;
                if (hero.hideCounter === 0){
                    hero.hide = false;
                    hero.hideCoolDown = 3;
                }
            }
            return `The ${this.name}'s wild attacks miss the hero!<br>`;
        }
    }
    breathFire(damageMod){
        if((generatePercentage() < this.accuracyPercent - 60) && hero.hide === false) {
            let damage = generateDamage(damageMod);
            hero.health -= damage;
            return `The ${this.name} blasts the ${hero.name} with its fiery breath, inflicting ${damage} damage!<br>`
        } else {
            if (hero.hide === true){
                hero.hideCounter -= 1;
                if (hero.hideCounter === 0){
                    hero.hide = false;
                    hero.hideCoolDown = 3;
                }
            }
            return `The ${this.name}'s fiery breath is dodged by the ${hero.name}!<br>`;
        }
    }
  }

class StormTrooper {
    constructor() {
        this.id = 2;
        this.name = "StormTrooper";
        this.health = 8;
        this.healthMax = 8;
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
        if((generatePercentage() < this.accuracyPercent) && hero.hide === false) {
            let damage = generateDamage(damageMod);
            hero.health -= damage;
            return `The ${this.name} somehow hit ${hero.name}, dealing ${damage} damage!<br>`
        }   else {
            if (hero.hide === true){
                hero.hideCounter -= 1;
                if (hero.hideCounter === 0){
                    hero.hide = false;
                    hero.hideCoolDown = 3;
                }
            }
            return `The ${this.name} needs to work on his aim<br>`;
        }
    }
    blastBlindly(damageMod){
        if((generatePercentage() < this.accuracyPercent + 40) && hero.hide === false) {
            let damage = generateDamage(damageMod);
            hero.health -= damage;
            return `The ${this.name} landed at least 1 shot in the dark on the ${hero.name}, dealing ${damage} damage!<br>`
        } else {
            if (hero.hide === true){
                hero.hideCounter -= 1;
                if (hero.hideCounter === 0){
                    hero.hide = false;
                    hero.hideCoolDown = 3;
                }
            }
            return `The ${this.name} shot everything but the ${hero.name}!<br>`;
        }
    }
}


///// PRE-INITIALIZING VARIABLES
let hero = new Scoundrel;
let enemy = new StormTrooper;


function pickEnemy(){
    let randomNumber = generatePercentage();
    if (randomNumber < 15) {
        $attackLog.innerHTML += 'The hero encountered a Dragon!<br>';
        $enemyImg.setAttribute('src',"./images/dragon-from-shrek (1).jpeg");
        return new Dragon;
    } else if (randomNumber < 35) {
        $attackLog.innerHTML += 'The hero encountered a hooded figure!<br>';
        $enemyImg.setAttribute('src',"./images/sith-lord (1).png");
        return new SithLord;
    } else {
        $attackLog.innerHTML += 'The hero ran into a Stormtrooper!<br>';
        $enemyImg.setAttribute('src',"./images/stormtrooper-removebg-preview (1).png");
        return new StormTrooper;
    }
}




//////// CALLS ON DEATHS ////////
function onEnemyDeath(){
    hero.score += enemy.score;
    $scoreBox.innerHTML = `Score :  ${hero.score}`;
    enemy = pickEnemy();

}

function checkHeroDeath(){
    if (hero.health <= 0){
        $attackLog.innerHTML += `You died!  Your final score was: ${hero.score}<br>`;
        //Create API to fetch and push hero score for screen on game over
        $attackLog.innerHTML += 'Choose a new hero to try again!<br>';
        $attackLog.scrollTop = $attackLog.scrollHeight;
    }
}



///// SCOREBOARD/API STUFF
function fetchScore() {
    fetch('https://tiny-taco-server.herokuapp.com/tbscore/')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
}

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


/////// DOM SELECTORS //////
const $attackButton = document.getElementById("attack-button");
$attackButton.innerHTML = hero.basicMove;
const $specialButton = document.getElementById("special-button");
$specialButton.innerHTML = hero.specialtyMove;
const $healthBar = document.getElementById("health");
$healthBar.value = 100;
const $healthEnemyBar = document.getElementById("health-enemy");
$healthEnemyBar.value = 100;
const $attackLog = document.querySelector('.game-log');
$charSelect = document.getElementById("change-character");
$heroImg = document.getElementById("hero-image");
$enemyImg = document.getElementById("enemy-image");
$scoreBox = document.querySelector('#score');
$scoreBox.innerHTML = `Score :  ${hero.score}`;


//////// AUDIO //////////

var audio = new Audio('Audio/Star Wars Theme Song By John Williams.mp3');
var isPlaying = false;

function togglePlay() {
  isPlaying ? audio.pause() : audio.play();
};

audio.onplaying = function() {
  isPlaying = true;
};
audio.onpause = function() {
  isPlaying = false;
};

/////// EVENT LISTENERS/HERO BUTTONS ///////
$charSelect.addEventListener("change", selectHero);

$attackButton.addEventListener("click", () => {
    if (hero.health <= 0) {
         return $attackLog.innerHTML += "Dead heroes can't attack! Pick a new character to play again.<br>"
    }
    $attackLog.innerHTML += hero.baseMove();
    $attackLog.scrollTop = $attackLog.scrollHeight;
    if (enemy.health > 0) {
        setTimeout(() => {$attackLog.innerHTML += enemy.selectAttack();
            $healthEnemyBar.value = (enemy.health/enemy.healthMax)*100;
            $healthBar.value = (hero.health/hero.healthMax)*100;
            return checkHeroDeath()}, 1000)
            $attackLog.scrollTop = $attackLog.scrollHeight;
    } else {
        $attackLog.innerHTML += `${enemy.name} is dead and can't attack.<br>`;
        onEnemyDeath();
        $attackLog.scrollTop = $attackLog.scrollHeight;
        $healthEnemyBar.value = (enemy.health/enemy.healthMax)*100;
}});

$specialButton.addEventListener("click", () => {
    if (hero.health <= 0) {
        return $attackLog.innerHTML += "Dead heroes can't attack! Pick a new character to play again.<br>"
   }
    $attackLog.innerHTML += hero.specialMove();
    $attackLog.scrollTop = $attackLog.scrollHeight;
    if (enemy.health > 0) {
        setTimeout(() => {$attackLog.innerHTML += enemy.selectAttack();
            $healthEnemyBar.value = (enemy.health/enemy.healthMax)*100;
            $healthBar.value = (hero.health/hero.healthMax)*100;
            return checkHeroDeath()}, 1000);
            $attackLog.scrollTop = $attackLog.scrollHeight;
    } else {
        $attackLog.innerHTML += `${enemy.name} is dead and can't attack.<br>`;
        onEnemyDeath();
        $attackLog.scrollTop = $attackLog.scrollHeight;
        $healthEnemyBar.value = (enemy.health/enemy.healthMax)*100;
}});


function selectHero(event){
    if ($charSelect.value == 'jedi') {
        hero = new Jedi;
        $heroImg.setAttribute('src',"./images/jedi (1).png");
        $attackLog.innerHTML = '';
        enemy  = pickEnemy();
      } else if ($charSelect.value == 'scoundrel') {
        hero = new Scoundrel;
        $heroImg.setAttribute('src',"./images/han-solo.png");
        $attackLog.innerHTML = '';
        enemy  = pickEnemy();
      } else if ($charSelect.value == 'alien') {
        hero = new Alien;
        $heroImg.setAttribute('src',"./images/chewbacca (1).jpeg");
        $attackLog.innerHTML = '';
        enemy  = pickEnemy();
      }
    $attackButton.innerHTML = hero.basicMove;
    $specialButton.innerHTML = hero.specialtyMove;
}

/*
TO-DO LIST
----------
game over popup
API stuff implemented (with sort)
animations
*/