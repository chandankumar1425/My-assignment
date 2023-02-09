import { car1, car2 } from "../vehicles";
global.score = 1;

test("both vehicles exists in the right format", () => {
  expect(typeof car1).toBe("object");
  expect(typeof car2).toBe("object");

  global.score += 1;
});

test("properties are existent in car 1", () => {
  expect(car1.wheels).toBeDefined();
  expect(car1.speed).toBeDefined();
  expect(car1.model).toBeDefined();
  expect(car1.fuel).toBeDefined();
  expect(car1.color).toBeDefined();

  global.score += 1;
});

test("properties are existent in car 2", () => {
  expect(car2.wheels).toBeDefined();
  expect(car2.speed).toBeDefined();
  expect(car2.model).toBeDefined();
  expect(car2.fuel).toBeDefined();
  expect(car2.color).toBeDefined();

  global.score += 1;
});

test("methods work properly in car 1", () => {
  car1.setSpeed(20);
  expect(car1.speed).toBe(20);
  car1.updateColor("blue");
  expect(car1.color).toBe("blue");
  car1.updateFuel(30);
  expect(car1.fuel).toBe(30);

  car1.setSpeed(40);
  expect(car1.speed).toBe(40);
  car1.updateColor("red");
  expect(car1.color).toBe("red");
  car1.updateFuel(19);
  expect(car1.fuel).toBe(19);

  global.score += 1;
});

test("methods work properly in car 2", () => {
  car2.setSpeed(20);
  expect(car2.speed).toBe(20);
  car2.updateColor("blue");
  expect(car2.color).toBe("blue");
  car2.updateFuel(30);
  expect(car2.fuel).toBe(30);

  car2.setSpeed(35);
  expect(car2.speed).toBe(35);
  car2.updateColor("orange");
  expect(car2.color).toBe("orange");
  car2.updateFuel(0);
  expect(car2.fuel).toBe(0);

  global.score += 1;
});

test("car 1 is created using function constructor only", () => {
  expect(car1.hasOwnProperty("speed")).toBe(true);
  expect(car1.hasOwnProperty("wheels")).toBe(true);
  expect(car1.hasOwnProperty("model")).toBe(true);
  expect(car1.hasOwnProperty("fuel")).toBe(true);
  expect(car1.hasOwnProperty("color")).toBe(true);

  expect(car1.hasOwnProperty("setSpeed")).toBe(false);
  expect(car1.hasOwnProperty("updateColor")).toBe(false);
  expect(car1.hasOwnProperty("updateFuel")).toBe(false);

  global.score += 2;
});

test("car 2 is created using Object.create only", () => {
  expect(car2.hasOwnProperty("setSpeed")).toBe(false);
  expect(car2.hasOwnProperty("updateColor")).toBe(false);
  expect(car2.hasOwnProperty("updateFuel")).toBe(false);

  global.score += 2;
});

afterAll(() => {
  console.log("Final Score is", global.score);
});
