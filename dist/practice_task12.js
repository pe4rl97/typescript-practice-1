"use strict";
// Use of concepts like abstract class, abstract method, constructorn and heirarchical inheritance
class Vehicle {
    constructor(name) {
        this.name = name;
    }
    moves() {
        console.log(`${this.name} is moving.`);
    }
}
class Car extends Vehicle {
    runsOn() {
        console.log(`${this.name} runs on road`);
    }
}
class Boat extends Vehicle {
    runsOn() {
        console.log(`${this.name} runs on water`);
    }
}
const car = new Car("Mercedes S-Class");
const boat = new Boat("Yacht");
car.runsOn();
car.moves();
boat.runsOn();
boat.moves();
//# sourceMappingURL=practice_task12.js.map