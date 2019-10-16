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
}
