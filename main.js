class Character {
  constructor() {
    this.name = 'Character';
    this.health = 10;
  }
}

class Hero extends Character {
  constructor(){
    super();
  }
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
  constructor() {
    this.stats = stats;
    this.name = 'Scoundrel';
    this.health = 8;
    // this.encounterChance = 25;
    this.baseMove = "shootBlaster"
    this.specialMove = "hide";
    this.accuracyPercent = 85;  }
}

class Alien extends Hero {
  constructor() {
    this.stats = stats;
    this.name = 'Alien';
    this.health = 12;
    // this.encounterChance = 25;
    this.specialMove = "beatWithClub";
    this.accuracyPercent = 75;  }
}

class Enemy extends Character {
  //Methods for NPC attacks?
  // Stats?
  //Do we extend classes for each bad guy?
  //Bad guy list: grunt/Stormtroopers, Darth Maul-type, krayt dragon
}

class Dragon extends Enemy {
  constructor() {
      this.id = 0;
      this.name = "Dragon";
      this.health = 15;
      this.encounterChance = 15;
      this.specialMove = "breathfire";
      this.accuracyPercent = 90;
  }
}

class SithLord extends Enemy {
  constructor() {
      this.id = 1;
      this.name = "Sith Lord";
      this.health = 10;
      this.encounterChance = 20;
      this.basicMove = "lightsaberAttack";
      this.specialMove = "shootLightning";
      this.accuracyPercent = 80;
      this.damageModifier = 1;
  }

}

//****BACKUP !!! POSSIBLY HAVE HERO & ENEMY ARRAYS INSTEAD OF CLASSES HERE */
/*
const heroesArray = [{

}]

const enemiesArray = [{

 id: 4,
  name: "alien",
  health: 12,
  specialMove: 'breathfire',
  accuracyPercent: 85,
}]

const enemiesArray = [{
  id: 0,
  name: "dragon",
  health: 15,
  encounterChance: 15,
  specialMove: 'breathfire',
  accuracyPercent: 90,
},
  {

  }
]
*/
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

