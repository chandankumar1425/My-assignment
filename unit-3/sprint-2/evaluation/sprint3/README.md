## Installation
```
npm i
```

## Test 
```
npm t
```

## Test (Watch mode)
```
npm t -- --watchAll
```

## file structure
most of your work would happen in `src/index.js` file.

## Maximum marks - 10
- ✅ Should be able to submit [1 marks]
- ✅ Animal object's properties & methods works as expected [1 marks]
- ✅ Animal has proper prototypical relations [1 Marks]
- ✅ Mammal object's properties & methods works as expected [1 marks]
- ✅ Mammal has proper prototypical relations [1 marks]
- ✅ Dog object's properties & methods works as expected [1 marks]
- ✅ Dog prototypes should be properly set [1 marks]
- ✅ Should initialize characters with the correct values [1 marks]
- ✅ Should change the health of a character on attack [1 marks]
- ✅ Warriors should work in the expected way [1 marks]
## Problem statement. 1 [6 Marks]

Design a 3 level hierarchy to represent animals and their sounds in JavaScript using **constructor functions**.

I'll repeat in case you missed: Problem 1 is expected to be solved using **constructor functions**.

### Level 1:

Create a base constructor function `Animal` with the following properties:

`name` (string)

`type` (string)

Add a method to the constructor function named `makeSound` which should return a string "Animal is making a sound".

It is expected that the **methods** like `makeSound` should not be copied to all the objects that are created using the **constructor function**. It must be found in the **prototype** chain.

### Level 2:

Create a constructor function `Mammal` which should inherit from the `Animal` constructor function.

Add a new property to the `Mammal` named `hasFur` (boolean)

Override the `makeSound` method to return a string "Mammal is making a sound".

### Level 3:

Create a constructor function `Dog` which should inherit from the `Mammal` constructor function.

Add a new property to the constructor function named `breed` (string)

Override the `makeSound` method to return a string "Woof Woof!"

### Example Invocation:
```
let d = new Dog("Fido", "dog", true, "Labrador");
console.log(d.makeSound()); // "Woof Woof!"

let m = new Mammal("Fluffy", "mammal", true);
console.log(m.makeSound()); // "Mammal is making a sound"

let a = new Animal("Charlie", "animal");
console.log(a.makeSound()); // "Animal is making a sound"
```

## Problem statement. 2 [3 Marks]

Design a 2 level hierarchy for a game that has different types of characters with different attributes and abilities. You are expected to implement it using ES6 Classes.

### Level 1:

Create a class named `Character` with the following attributes:

`name` (string)
`health` (integer)
`attackPower` (integer)

And the following methods:

`attack` which takes a Character object as a parameter and decreases its health by the attackPower of the calling object.

`isAlive` which returns a boolean indicating whether the character's health is greater than 0.

### Level 2:

Create a class named `Warrior` which extends the `Character` class and has the following additional attributes:

`weapon` (string)
`armor` (integer)

And the following methods:

`attack` which should override the `Character` class's `attack` method and increase the `attackPower` by 10 when the weapon is a `sword`.

`defend` which takes no parameters and increases the `Warrior` object's `health` by 10.


### Example Invocation: 
```
let character = new Character("John", 100, 20);
let enemy = new Character("Enemy", 100, 20);
let warrior = new Warrior("John", 100, 20, "sword", 30);

console.log(enemy.health); // 100
character.attack(enemy);
character.attack(enemy);
console.log(enemy.health); // 60
warrior.attack(enemy);
console.log(enemy.health); // 30

console.log(warrior.health); // 100
warrior.defend();
console.log(warrior.health); // 110

console.log(enemy.isAlive()); // true
enemy.health = 0;
console.log(enemy.isAlive()); // false
```


### General guidelines
- Example inputs are just for example. The tests may check the functions by invoking them with different inputs of the same shape.
- Before writing a single line of code please read the problem statement very carefully.
- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time