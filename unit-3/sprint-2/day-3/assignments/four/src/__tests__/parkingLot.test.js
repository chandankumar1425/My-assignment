import { Vehicle, Car, Bike, Bus, Slot, ParkingFloor } from "../parkingLot";
global.score = 1;

test("class Vehicle should work properly", () => {
  expect(Vehicle).toBeDefined();
  const v1 = new Vehicle("Car", "12345", "black");
  expect(v1).toBeInstanceOf(Vehicle);

  expect(v1).toEqual({
    type: "Car",
    registrationNumber: "12345",
    color: "black",
  });

  global.score += 1;
});

test("car, bus and bike classes works properly", () => {
  expect(Car).toBeDefined();
  expect(Bike).toBeDefined();
  expect(Bus).toBeDefined();

  let car1 = new Car("Car-1", "blue");
  let bike1 = new Bike("Bike-1", "black");
  let bus1 = new Bus("Bus-1", "green");

  expect(car1).toBeInstanceOf(Car);
  expect(bike1).toBeInstanceOf(Bike);
  expect(bus1).toBeInstanceOf(Bus);

  expect(car1).toEqual({
    type: "Car",
    registrationNumber: "Car-1",
    color: "blue",
  });

  expect(bike1).toEqual({
    type: "Bike",
    registrationNumber: "Bike-1",
    color: "black",
  });

  expect(bus1).toEqual({
    type: "Bus",
    registrationNumber: "Bus-1",
    color: "green",
  });

  expect(car1.type).toBe("Car");
  expect(bike1.color).toBe("black");
  expect(bus1.color).toBe("green");

  global.score += 2;
});

test("Class Slot work properly", () => {
  expect(Slot).toBeDefined();
  const s1 = new Slot("Car", "20");
  expect(s1).toBeInstanceOf(Slot);
  expect(s1).toEqual({
    number: "20",
    type: "Car",
    isBooked: false,
  });

  global.score += 1;
});

test("Class ParkingFloor should work properly", () => {
  expect(ParkingFloor).toBeDefined();
  const p1 = new ParkingFloor(2, 4);
  expect(p1).toBeInstanceOf(ParkingFloor);
  let slot1 = new Slot("Bus", 1);
  let slot2 = new Slot("Bike", 2);
  let slot3 = new Slot("Bike", 3);
  let slot4 = new Slot("Car", 4);

  let arr = [slot1, slot2, slot3, slot4];
  expect(p1).toEqual({
    floorNumber: 2,
    maxLimit: 4,
    parkingSpots: arr,
    vacantParkingSpots: [],
  });

  global.score += 1;
});

test("displayAvailableSlots method works properly", () => {
  let p1 = new ParkingFloor(1, 4);
  var slot1 = new Slot("Bus", 1);
  var slot2 = new Slot("Bike", 2);
  var slot3 = new Slot("Bike", 3);
  var slot4 = new Slot("Car", 4);

  var arr = [slot1, slot2, slot3, slot4];

  expect(p1.displayAvailableSlots()).toEqual(arr);

  global.score += 2;
});

test("park vehicle method works properly", () => {
  let p1 = new ParkingFloor(1, 4);
  var slot1 = new Slot("Bus", 1);
  var slot2 = new Slot("Bike", 2);
  var slot3 = new Slot("Bike", 3);
  var slot4 = new Slot("Car", 4);

  let car1 = new Car("Car-1", "blue");
  let bike1 = new Bike("Bike-1", "black");
  let bus1 = new Bus("Bus-1", "green");

  p1.parkVehicle(car1);

  var arr2 = [slot1, slot2, slot3];

  expect(p1.displayAvailableSlots()).toEqual(arr2);

  p1.parkVehicle(bike1);

  var arr3 = [slot1, slot3];

  expect(p1.displayAvailableSlots()).toEqual(arr3);

  global.score += 2;
});

afterAll(() => {
  console.log("Final Score is", global.score);
});
