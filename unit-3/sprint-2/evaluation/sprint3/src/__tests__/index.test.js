import {
  Animal, 
  Mammal, 
  Dog,
  Character,
  Warrior
} from "../index";
global.score = 1;

describe("Animal", () => {
  let animal = new Animal("Charlie", "animal");

  test("Animal object's properties & methods works as expected", () => {
    expect(animal.name).toBe("Charlie");
    expect(animal.type).toBe("animal");
    expect(animal.makeSound()).toBe("Animal is making a sound");
    global.score += 1;
  });

  test("Animal has proper prototypical relations", () => {
    expect(typeof Animal).toBe("function");
    expect(Animal.prototype.constructor).toBe(Animal);
    expect(Animal.prototype).toHaveProperty("makeSound");
    expect(Object.getPrototypeOf(Animal.prototype)).toBe(Object.prototype);
    expect(Object.getPrototypeOf(Animal)).toBe(Function.prototype);
    global.score += 1;
  });
});

describe("Mammal", () => {
  let mammal;
  mammal = new Mammal("Fluffy", "mammal", true);

  test("Mammal object's properties & methods works as expected", () => {
    expect(mammal.name).toBe("Fluffy");
    expect(mammal.type).toBe("mammal");
    expect(mammal.hasFur).toBe(true);
    expect(mammal.makeSound()).toBe("Mammal is making a sound");
    global.score += 1;
  });

  test("Mammal has proper prototypical relations", () => {
    expect(typeof Mammal).toBe("function");
    expect(Mammal.prototype.constructor).toBe(Mammal);
    expect(Mammal.prototype).toHaveProperty("makeSound");
    expect(Object.getPrototypeOf(Mammal.prototype)).toBe(Animal.prototype);
    expect(Object.getPrototypeOf(Mammal)).toBe(Function.prototype);
    global.score += 1;
  });
});

describe("Dog", () => {
  let dog;
  dog = new Dog("Fido", "dog", true, "Labrador");

  test("Dog object's properties & methods works as expected", () => {
    expect(dog.name).toBe("Fido");
    expect(dog.type).toBe("dog");
    expect(dog.hasFur).toBe(true);
    expect(dog.breed).toBe("Labrador");
    expect(dog.makeSound()).toBe("Woof Woof!");
    global.score += 1;
  });

  test("Dog prototypes should be properly set", () => {
    expect(typeof Dog).toBe("function");
    expect(Dog.prototype.constructor).toBe(Dog);
    expect(Dog.prototype).toHaveProperty("makeSound");
    expect(Object.getPrototypeOf(Dog.prototype)).toBe(Mammal.prototype);
    expect(Object.getPrototypeOf(Dog)).toBe(Function.prototype);
    global.score += 1;
  });
});

describe("Character class", () => {
  let character;

  beforeEach(() => {
    character = new Character("John", 100, 20);
  });

  it("should initialize characters with the correct values", () => {
    expect(character.name).toBe("John");
    expect(character.health).toBe(100);
    expect(character.attackPower).toBe(20);
    global.score += 1;
  });

  it("should change the health of a character on attack", () => {
    let enemy = new Character("Enemy", 100, 20);
    character.attack(enemy);
    expect(enemy.health).toBe(80);
    expect(character.isAlive()).toBe(true);
    character.health = 0;
    expect(character.isAlive()).toBe(false);
    global.score += 1;
  });
});

describe("Warrior class", () => {
  let warrior;

  beforeEach(() => {
    warrior = new Warrior("John", 100, 20, "sword", 30);
  });

  it("Warriors should work in the expected way", () => {
    expect(warrior.name).toBe("John");
    expect(warrior.health).toBe(100);
    expect(warrior.attackPower).toBe(20);
    expect(warrior.weapon).toBe("sword");
    expect(warrior.armor).toBe(30);
    let enemy = new Character("Enemy", 100, 20);
    warrior.attack(enemy);
    expect(enemy.health).toBe(70);
    warrior.defend();
    expect(warrior.health).toBe(110);
    global.score += 1;
  });
});

afterAll(() => {
  console.log("Final Score is", global.score);
});

