//  Objects oops
//  Create an object representing a car with properties like amke model and year.
//  add a method to the car object to start the engine.

let car = {
    make : "Toyota",
    model: "Camry",
    year: 2023
}

car .startEngine = function(){
    console.log("Engine Started");
}

car.startEngine();