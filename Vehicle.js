class Vehicle{
    constructor(manufacturer, wheels){
        this.manufacturer=manufacturer;
        this.wheels=wheels;
    }
    get info(){
        return this.aboutVehicle();
    }
    aboutVehicle(){
        console.log(`This is a ${this.type} made by ${this.manufacturer} with ${this.wheels} wheels.`);
    }
}
    class Trucks extends Vehicle{
        constructor(type, manufacturer, wheels, doors, bed){
            super(manufacturer, wheels)
        this.doors=doors>0;
        this.type=type;
        this.bed=true;
        this.manufacturer=manufacturer;
        this.wheels=4;
        }
        aboutVehicle(){
            console.log(`This is a ${this.type} made by ${this.manufacturer} with ${this.wheels} wheels.`);
        }
    }
    class Sedans extends Vehicle{
        constructor(type, manufacturer, wheels, size, mpg){
            super(manufacturer, wheels)
            this.size='small'||'medium';
            this.type=type;
            this.mpg=mpg;
            this.manufacturer=manufacturer;
            this.wheels=4;
        }
        aboutVehicle(){
            console.log(`This is a ${this.type} made by ${this.manufacturer} with ${this.wheels} wheels.`);
        }
    }
    
    class Motorcycles extends Vehicle{
        constructor(type, manufacturer, wheels, handlebars, doors, steeringWheel){
            super(manufacturer, wheels)
    this.handlebars=true;
    this.type=type;
    this.steeringWheel=false;
    this.doors=0;
    this.manufacturer=manufacturer;
    this.wheels=2;
        }
        aboutVehicle(){
            console.log(`This is a ${this.type} made by ${this.manufacturer} with ${this.wheels} wheels.`);
        }
}
let x=new Trucks('truck','Ford', 4);
x.aboutVehicle();
let y=new Sedans('sedan', 'Toyota', 4);
y.aboutVehicle();
let z=new Motorcycles('motorcycle', 'Disney', 15);
z.aboutVehicle();

