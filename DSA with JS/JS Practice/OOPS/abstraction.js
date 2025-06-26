class Car{
    #fuel
    constructor(intialValue){
        this.#fuel = intialValue;
    }

    drive(km){
        let totalUnit = km / 10;
       
        if(this.#fuel>= totalUnit){
            this.#fuel -= totalUnit;
            console.log("You drove", km, "km. Fuel remaining:", this.#fuel);
        }else{
            console.log("Fuel is not sufficient");
        }
    }

    refuel(units){
        this.#fuel += units;
    }

    getFuelLevel(){
        return `Fuel left: ${this.#fuel.toFixed(2)} units`;
    }
}

const myCar = new Car(10);
myCar.drive(102);
myCar.refuel(2)
myCar.drive(102);
console.log(myCar.getFuelLevel())