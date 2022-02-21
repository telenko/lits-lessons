/**
 * 1) what is composition and how to use it?
 * 2) Car with akppCheck, Car with electricEngineCheck, Car with  electricAndAkpp
 * 3) Adding Engine class, using engine instance inside Car, Transmission object
 * 4) Adding validations array for all checks
 * 5) instanceof checks
 * 
 * 6) practice -- Collection, ProductsCollection
 * 7) Widget(async render, attach,), ProductsWidget(collection)
 * 8) Widgets composition ProductItemWidget()
 * 9) memory leak notice (destroy method)
 * 10) another approach (render reconcile)
 * 
 * 11) FP quick review
 * 12) function purity
 * 13) 1st class function
 * 14) HOF
 */ 


class Car {//a -> b -> c

    constructor(model, engine, transmission, cargo) {
        this.model = model || 'unknown';
        this.details = '';
        if (engine instanceof Engine) {//ElectricEngine, DieselEngine
            this._engine = engine;
        } else {
            return;
        }
        this._transmission = transmission;
        this._cargo = cargo;
    }

    setEngine(engine) {
        this._engine = engine;
    }

    // _checkFuel() {
    //     return this._fuelLevel >= 5;
    // }

    // _checkTirePressure() {
    //     return this._tirePressure > 2.4 && this._tirePressure < 3;
    // }

    drive() {
        // if (!this._checkFuel()) {
        //     console.log("Error, cann't drive, fuel level is small");
        //     return;
        // }
        // if (!this._checkTirePressure()) {
        //     console.log("Error, cann't drive, tire pressure is wrong");
        //     return;
        // }
        if (!this._engine.check()) {
            return;
        }
        if (!this._transmission.check()) {
            return;
        }
        if (this._cargo && !this._cargo.check()) {
            return;
        }
        this._engine.start();
        this._transmission.start();
        console.log(`DRIVE car with model ${this.model}`);
    }

    stop() {
        console.log("STOP");
    }

    // loadDetails() {
    //     return new Promise((resolve, reject) => {
    //         const data = "some details about car";
    //         this.details = data;
    //         resolve(data)
    //     })
    // }

}

// const car1 = new Car();// XMLHttpRequest
// car1.drive();
// car1.stop();

// const car2 = new Car("lits-model");// XMLHttpRequest
// car2.drive();
// car2.stop();

// const car3 = new Car("car-wrong", 2, 2.5);
// car3.drive();

// const car4 = new Car("car-wrong", 80, 2.2);
// car4.drive();

// class TruckCar extends Car {

//     constructor(model, fuelLevel, tirePressure, cargoState) {
//         super(model, fuelLevel, tirePressure);
//         this._cargoState = cargoState;
//     }

//     _checkCargo() {
//         return this._cargoState;
//     }

//     drive() {
//         if (!this._checkCargo()) {
//             console.log("Cargo is not ok");
//             return;
//         }
//         console.log("Truck is driving");
//         super.drive();
//     }

// }

// const truck1 = new TruckCar('lits-truck-2', 70, 2.9, true);
// truck1.drive();
// truck1.stop();

// const truck2 = new TruckCar('lits-truck-2', 70, 2.9, false);
// truck2.drive();
// truck2.stop();

// const truck3 = new TruckCar('lits-truck-2', 2, 2.9, true);
// truck3.drive();
// truck3.stop();

// // function driveSomeCar(car) {
// //     car.drive();
// // }

// // driveSomeCar(truck3);

// function makeCar(type) { // Car
//     if (type === 'lightweight') {
//         return new Car();
//     } else if (type === 'truck') {
//         return new TruckCar();
//     }
// }

// makeCar('lightweight').drive();
// makeCar('truck').drive();

class Engine {

    check() {
        return true;//false
    }

    start() {}

    stop() {}

}

class ElectricEngine extends Engine {
    constructor(minCapacity, currentState) {
        this._minCapacity = minCapacity;
        this._currentState = currentState;
        super();
    }
    check() {
        return this._currentState >= this._minCapacity;
    }

    start() {
        if (!this.check()) {
            return;
        }
        console.log("Engine is starting")
    }

    stop() {
        console.log("Engine is stopping")
    }
}

class DieselEngine extends Engine {

}


class Transmission {
    check() {}
    start() {}
    stop() {}

    nextLevel() {}
    previousLevel() {}
}


class AKPPTransmission extends Transmission {

}

class Cargo {
    check() {
        return true;//false
    }
}

class TruckCargo extends Cargo {
    constructor(state) {
        this._state = state;
    }
    check() {
        return  this._state;//false
    }
}

const electricEngine1 = new ElectricEngine(200, 4000);
const transmission1 = new AKPPTransmission();
const carWithElectric = new Car("Lits_car_1", electricEngine1, transmission1, new LightWeightCargo());
// carWithElectric.setEngine(new DieselEngine());
carWithElectric.drive();

const carWithGas = new Car("LITS_TRUCK", new DieselEngine(), new ManualTransmisson(), new TruckCargo());

// Functional programming
/**
 * function is everything
 */

/**
 * function purity
 */
const a = {fake: "test"}
function sum (a, b) {
    return a + b;
}

function calculateSomething(a) {
    return a + window._something;
}

/**
 * 1st class functions
 */
const func = function() {console.log("fake")}
document.body.addEventListener('click', func);

/**
 * HOF
 */

const hof = () => {
    const f = () => {
        console.log("test");
    }
    return f;
}

const func2 = hof();
func2();

hof()();

// function sumWithLogs() {
//     return (a,b) => {
//         console.log("starting")
//         const result = sum(a,b);
//         console.log("finishing")
//         return result;
//     }
// }

const makeWithLogs = (decoratedFunc) => {
    return (...args) => {//const args = [2,3,4,6]
        console.log("starting")
        const result = decoratedFunc(...args);
        console.log("finishing")
        return result;
    }
}

const newFunc = makeWithLogs(sum);
newFunc(2,3,4);

// function a (b,c) {
//     console.log(b,c);
// }
// const args = [1,2]
// a(...args)

/**
 * 
 * OOP
 *  + зрозумілість
 *  - складність
 * 
 * FP
 *  + чисті функції (легко тестувати)
 *  + декларативним
 *  - не завжди приміняється
 * 
 * 
 */

/**
 * Homework
 * Person (address, city, country, street, house), job(profession, experience)
 * FP purity,1st class,hof
 */