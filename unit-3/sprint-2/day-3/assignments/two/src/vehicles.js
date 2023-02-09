// Function constructor
function FourWheeler(wheels, model, color, speed, fuel) {
    this.model= model,
    this.color = color,
    this.speed = speed,
    this.fuel = fuel,
    this.wheels = wheels

    Object.setPrototypeOf(FourWheelerObject, this)
}

FourWheeler.prototype.setSpeed = function (speed){
    this.speed = speed;
    
}
FourWheeler.prototype.updateColor = function (color){
    this.color = color;
    
}
FourWheeler.prototype.updateFuel = function (fuel){
    this.fuel = fuel;
    
}
// Parent object for Object.create
let FourWheelerObject = {
    
};

// Store function contructor object here
var car1= new FourWheeler("wheels","model", "color", "speed", "fuel")

// Store Object.create here
var car2= Object.create(FourWheelerObject)

export { car1, car2 };