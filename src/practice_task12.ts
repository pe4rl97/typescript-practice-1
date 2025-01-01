// Use of concepts like abstract class, abstract method, constructorn and heirarchical inheritance
abstract class Vehicle {
    constructor(public name: string) {}
    abstract runsOn() : void;
    moves() : void {
        console.log(`${this.name} is moving.`);
    } 
}

class Car extends Vehicle {
    runsOn(): void {
        console.log(`${this.name} runs on road`);
    }
}

class Boat extends Vehicle {
    runsOn(): void {
        console.log(`${this.name} runs on water`);
    }
}

const car = new Car("Mercedes S-Class");
const boat = new Boat("Yacht");

car.runsOn();
car.moves();

boat.runsOn();
boat.moves();