/**
 * 1) why we need some paradigms? simplify code usage/scaling
 * 2) most popular paradigms OOP/FP
 * 3) what is OOP
 *
 * 4) OOP - abstraction/encapsulation/inheritance/polymorphism
 *
 * 5) abstraction - make some reusable entity with own set of features
 * const xhr = {send() {}, load() {},};//{}
 * xhr.send() xhr.open() xhr.addEventListener();
 * xhr.responseText
 * 
 * fetch()
 * 
 * 6) abstraction in JS - introducing class/prototypes
 *
 * 7) making Car class with methods .drive() .stop()
 * 7.1) constructor and creating new instances of class Car
 * class Car {
 *    constructor(model) {
 *        console.log("Car setuped", model);
 *    }
 *    drive() {}
 *    stop() {}
 * }
 * const realCar1 = new Car('lits-car1');
 * realCar1.drive();
 * const realCar2 = new Car();
 * 
 * 
 * 8) encapsulation - hiding data/complexities
 * 9) encapsulation in JS Car (features). _checkIfCarCanStart() ._checkFuel() ._checkTirePressure()
 * 10) encapsulation in JS Car (data). _minFuelToStart (5%)  _minTirePressure() 2.4
 * 
 * 11) inheritance - extending classes
 * 12) inheritance in JS - TruckCar extends Car .drive() { this._checkCargo(); super.drive(); } _cargoState
 * 12.1) (note about prototypes), super note
 * 12.2) LightWeightCar this._checkAKPPOil()
 * 12.3) gorilla bananna problem
 * 
 * 13) Polymorphism OOP - one form - multiple cases to use
 * 14) Polymorphism in js - resolveCar(type): Car. prompt('type') and .drive()
 * 
 * 15) Static class members
 * TruckCar.minAllowedWeight = 3.5t
 * LightWeightCar.minAllowedWeight = 0.5t
 * 
 * 16) refactoring products into OOP
 * MVP (Backbone.js) Model   Presenter
 * 
 * Model - stores/fetches data from backend or cache
 * Widget - viewes data from model or just JSON
 * class Widget {
 * 
 *     getElement() {return this._element}
 *     constructor() { this._element = document.createElement("div") }
 *     render() {
 *         //
 *     }
 *     prepare() {}
 * 
 * }
 * 
 * class ProductItemWidget extends Widget {
 * 
 *   render() {
 *       return `<article>....`
 *   }
 * 
 * }
 * 
 * class Collection {
 * 
 *  static uri() {}
 * 
 *  load(): Promise
 * 
 *  toArray() {} 
 *
 * }
 * 
 * class ProductsCollection extends Collection {
 * 
 *  static uri() { return 'https://...' }
 * 
 *  
 * }
 * 
 * const products = new ProductsCollection(); // ._list = [];
 * await produtcs.load();
 * const productsWidget = new ProductsWidget(products);
 * productsWidget.render();
 */


/**
 * Homework
 * 
 * 1) Define Person class with such data (age, gender, weight, growth, education, country, city)
 *                  and method .introduce() which will print all data into console
 * 2) Create childclass Student with such data Person + (grade, institute, faculty) - include them into introduce()
 * 3) Create another childclass Teacher with such data Person + (experience, subjects, isCurator) - include them into introduce()
 * 4) Create instance of Person and few instances of Student, Teacher. print details of each into console
 * 5*) Define Class entity which should contain list of students, curator + print details into console .introduce()
 * 6*) what to do if we need a student entity which is released? new subclass?
 * 7) composition
 */ 


class Car {//a -> b -> c

    constructor(model, fuelLevel, tirePressure) {
        this.model = model || 'unknown';
        this.details = '';
        this._fuelLevel = fuelLevel || 5;
        this._tirePressure = tirePressure || 2.5;
    }

    _checkFuel() {
        return this._fuelLevel >= 5;
    }

    _checkTirePressure() {
        return this._tirePressure > 2.4 && this._tirePressure < 3;
    }

    drive() {
        if (!this._checkFuel()) {
            console.log("Error, cann't drive, fuel level is small");
            return;
        }
        if (!this._checkTirePressure()) {
            console.log("Error, cann't drive, tire pressure is wrong");
            return;
        }
        console.log(`DRIVE car with model ${this.model}`);
    }

    stop() {
        console.log("STOP");
    }

    loadDetails() {
        return new Promise((resolve, reject) => {
            const data = "some details about car";
            this.details = data;
            resolve(data)
        })
    }

}

const car1 = new Car();// XMLHttpRequest
car1.drive();
car1.stop();

const car2 = new Car("lits-model");// XMLHttpRequest
car2.drive();
car2.stop();

const car3 = new Car("car-wrong", 2, 2.5);
car3.drive();

const car4 = new Car("car-wrong", 80, 2.2);
car4.drive();

class TruckCar extends Car {

    constructor(model, fuelLevel, tirePressure, cargoState) {
        super(model, fuelLevel, tirePressure);
        this._cargoState = cargoState;
    }

    _checkCargo() {
        return this._cargoState;
    }

    drive() {
        if (!this._checkCargo()) {
            console.log("Cargo is not ok");
            return;
        }
        console.log("Truck is driving");
        super.drive();
    }

}

const truck1 = new TruckCar('lits-truck-2', 70, 2.9, true);
truck1.drive();
truck1.stop();

const truck2 = new TruckCar('lits-truck-2', 70, 2.9, false);
truck2.drive();
truck2.stop();

const truck3 = new TruckCar('lits-truck-2', 2, 2.9, true);
truck3.drive();
truck3.stop();

// function driveSomeCar(car) {
//     car.drive();
// }

// driveSomeCar(truck3);

function makeCar(type) { // Car
    if (type === 'lightweight') {
        return new Car();
    } else if (type === 'truck') {
        return new TruckCar();
    }
}

makeCar('lightweight').drive();
makeCar('truck').drive();