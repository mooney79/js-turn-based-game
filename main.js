class Character{
    //Basic stats?
}

class Hero extends Character{
    //Array of Hero types
    //Accuracy
    //Health
}

class Jedi extends Hero{
    //Jedi stats plus moves
    //Name
    //Any modifiers
    //Any moves
}

class Scoundrel extends Hero{
    //Scoundrel stats plus moves
    //Name
    //Any modifiers
    //Any moves
}

class Alien extends Hero{
    //Alien stats plus moves
    //Name
    //Any modifiers
    //Any moves
}

class Enemy extends Character{
    //Methods for NPC attacks?
    // Stats?
    //Do we extend classes for each bad guy?
    //Bad guy list: grunt/Stormtroopers, Darth Maul-type, krayt dragon
    //Kat calls dragon
}

class Dragon extends Enemy{

}

class Grunt extends Enemy{

}

class Sith extends Enemy{

}

class Game{

}

/* Basic Mechanics
Health pools: 500 (modify by Hero and Enemy Types)
Avg swings to bring down an enemy: 10
Avg accuracy: 75%
Avg damage/swing: about 65
Up to 25% variance for specialties
    Exceptions: grunts should be easy to kill, dragon a real challenge

Assignments:
Kat -- Alien, Dragon
Nathan -- Jedi, Stormtrooper
Sam -- Scoundrel, Sith Lord

Enemy -- Change to something like

enemyArray = [{id: 0, name: "dragon", health: 1000}]


*/