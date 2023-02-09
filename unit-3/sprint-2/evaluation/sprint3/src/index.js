
// Problem 1. 
function Animal(name, type) {
    this.name=name;
    this.type=type;
}
Animal.prototype.makesound = function() {
    return "Animal is making a sound";
    
};
function Mammal(name, type, hasFur) {
    Animal.call(this, name, type);
    this.hasFur =hasFur;
}
Mammal.prototype =Object.create(Animal.prototype);
Mammal.prototype.constructor = Mammal;

Mammal.prototype.makesound = function () {
    return "Mammal is making a sound";
};

function Dog(name, type, hasFur, breed) {
    Mammal.call(this,name,type,hasFur);
    this.breed = breed;

}
Dog.prototype = Object.create(Mammal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.makesound = function () {
    return "Woof Woof";
};

class Character {
    constructor(name,health,attackPower){
        this.name=name;
        this.health=health;
        this.attackPower=attackPower
    }
    attack(character){
        character.health =this.attackPower;
    }
    isAlive(){
        return this.health>0;
    }


}

class Warrior extends Character {
    constructor(name,health,attackPower, weapon,armor){
    super(name,health,attackPower);
    this.weapon = weapon;
    this.armor = armor;
    }
    attack(character){
        if(this.weapon === 'sword'){
            this.attackPower +=10;
        }
        super.attack(character);
    }
    defend(){
        this.health +=10;
    }
}

export { Dog, Mammal, Animal, Character, Warrior }
