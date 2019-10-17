class Pseudo {
  constructor(name, city, age) {
    this.name = name;
    this.city = city;
    this.age = age;
  }
  hello() {
    console.log(
      `Hey! My name is ${this.name} I am ${this.age} years old and live in ${this.city}.`
    );
  }
}
let friend1 = new Pseudo("John", "Atlanta", 24);
let friend2 = new Pseudo("Jim", "Birmingham", 28);
let friend3 = new Pseudo("Jane", "Mobile", 32);
let friend4 = new Pseudo("Kim", "London", 21);
let friend5 = new Pseudo("Spock", "Vulcan", 85);

friend1.hello();
friend2.hello();
friend3.hello();
friend4.hello();
friend5.hello();

class Vehicle {
  constructor(manufacturer, wheels) {
    this.manufacturer = manufacturer;
    this.wheels = wheels;
  }
  aboutVehicle() {
    console.log(
      `This is a ${this.className}, made by ${this.manufacturer} and it has ${this.wheels} wheels`
    );
  }
}
class Truck extends Vehicle {
  constructor(manufacturer, wheels, doors, bed) {
    super(manufacturer, wheels);
    this.doors = doors;
    this.bed = bed;
  }
  aboutTruck() {
    console.log(
      `This is a truck, made by ${this.manufacturer}, it has ${this.wheels} wheels, ${this.doors} and a truck bed.`
    );
  }
}
class Sedan extends Vehicle {
  constructor(manufacturer, wheels, size, mpg) {
    super(manufacturer, wheels);
    this.size = size;
    this.mpg = mpg;
  }
  aboutSedan() {
    console.log(
      `This is a sedan, made by ${this.manufacturer}, it has ${this.wheels} wheels, it is ${this.size} sized, and gets ${this.mpg} mpg.`
    );
  }
}
class Motorcycle extends Vehicle {
  constructor(manufacturer, wheels, handlebars, noDoors) {
    super(manufacturer, wheels);
    this.handlebars = handlebars;
    this.noDoors = noDoors;
  }
  aboutMotorcycle() {
    console.log(
      `This is a motorcycle, made by ${this.manufacturer}, it has ${this.wheels} wheels, has handlebars and no doors.`
    );
  }
}

const trk = new Truck("Ford", 4, 2, true);
const car = new Sedan("Honda", 4, "medium", 25);
const cyc = new Motorcycle("Harley", 2, true, true);

trk.aboutTruck();
car.aboutSedan();
cyc.aboutMotorcycle();
