# JS-LLD-Parking-Lot

## Submission Instructions [Please note]

## Maximum Marks - 10

- The Submission should not contain spaces, for example,/js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to GitHub

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ class Vehicle should work properly - 1 mark
 ✅ car, bus and bike classes works properly - 2 mark
 ✅ Class Slot work properly - 1 mark
 ✅ Class ParkingFloor should work properly - 1 marks
 ✅ displayAvailableSlots method works properly - 2 marks
 ✅ park vehicle method works properly - 2 marks

```

## Installation

- you can use any node version that works for you ( 14+ )
- please make sure you do not push package-lock.json
- Download and unzip the boilerplate
- Navigate to the correct path
- Run **npm install** to install the node modules
- Run **npm test** for the test cases.

## Description

- Create a class `Vehicle` with the following instructions:
- It will accept type, registrationNumber, color as params

```
  {
    type = type;
    registrationNumber = registrationNumber;
    color = color;
  }
```

- complete the following three classes as follows which inherit the properties and methods of the `Vehicle` class but have a fixed value for type (e.g. Car, Bike, & Bus) param, and only accept registrationNumber and color as params:

  - Car
  - Bike
  - Bus

- Create a class `Slot` with the following instructions:

  - It will accept type, and number as params
  - It will have another property `isBooked` which will be false by default.

```
  {
    number = number;
    type = type;
    isBooked = false;
  }
```

- Create a class `ParkingFloor` with the following instructions:

  - It will accept floorNumber and maxLimit (take value as 4) as params

  - It needs to have other properties: ` parkingSpots and vacantParkingSpots` which will maintain the values of all parking spots (parkingSpots), and values of only vacant parking spots (vacantParkingSpots) as arrays of data respectively.

```
  {
    floorNumber = floorNumber;
    maxLimit = maxLimit;
    parkingSpots = ["Push all slots here"];
    vacantParkingSpots = ["Add all vacant slots here"];
  }
```

- Create methods which will return the respective properties as follows:

  - `displayAvailableSlots`: return the value of vacantParkingSpots

- Every `ParkingFloor` you create, needs to have a fixed number of parking spots (take 4) as follows: (basis which you need to update the values of `parkingSpots` and `vacantParkingSpots`

  - 1 Slot (created a class for this above) for Bus
  - 2 Slots (created a class for this above) for Bike
  - 1 Slot (created a class for this above) for Car

- Create a `parkVehicle` method which will accept the type of the Vehicle (made a class for this previously) as an argument, and then updates the values of `parkingSpots` and `vacantParkingSpots`.

- Once a vehicle is parked on a slot, change the isBooked status to true.

- If the parking slots are full, the user should not be able to park the vehicle, and `parkVehicle` function should return "(Vehicle Type) slots are full"

## Boilerplate

- Do not change the given folder structure
- inside src, you will parkingLot.js file which is where you need to write the mentioned methods
- you can find the testcase under `__tests__ ` folder

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes to respond,
- so we request you to read the problem carefully and debug it before itself
- we also request you to not just submit it last minute
- try to keep one submission at a time
