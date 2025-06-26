class Vehicle{
    constructor(brand, fuel){
        this.brand = brand;
        this.fuel = fuel;
    }
    drive(distance){
        let totalUnit = distance/5;
        if(this.fuel<totalUnit){
            console.log("Not enough fuel to drive");
        }else{
            this.fuel -= totalUnit;
        }
    }

    refuel(units){
        this.fuel += units;
    }

    getInfo(){
        return `Brand-${this.brand} and Current Fuel-${this.fuel}`
    }
}


class Bike extends Vehicle{
    drive(distance){
        let totalUnit = distance/10;
        if(this.fuel<totalUnit){
            console.log("Not enough fuel to drive");
        }else{
            this.fuel -= totalUnit;
        }
    }

    getInfo(){
        return `Bike - ${this.brand} and Current Fuel-${this.fuel}`
    }
}


class Truck extends Vehicle{
    drive(distance){
        let totalUnit = distance/3;
        if(this.fuel<totalUnit){
            console.log("Not enough fuel to drive");
        }else{
            this.fuel -= totalUnit;
        }
    }

    getInfo(){
        return `Truck - ${this.brand} and Current Fuel-${this.fuel}`
    }
}


const bike1 = new Bike("Yamaha", 10);
bike1.drive(50);      // should reduce 5 units
console.log(bike1.getInfo());  // Bike - Yamaha, Fuel left: 5

const truck1 = new Truck("Tata", 15);
truck1.drive(30);     // should reduce 10 units
console.log(truck1.getInfo()); // Truck - Tata, Fuel left: 5