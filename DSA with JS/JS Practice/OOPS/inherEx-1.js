class Employee{
    constructor(name,salary){
        this.name = name;
        this.salary = salary;
    }
    describe(){
        console.log(`Employee: ${this.name}, Salary: ${this.salary}`);
    }
}

class Manager extends Employee{
    constructor(name,salary,department){
        super(name,salary);
        this.department = department;
    }

    work(){
        console.log(`${this.name} manages the ${this.department} department`);
    }
}


const aakash = new Employee('Aakash',1000);
const dharmendra = new Manager('Dharmendra',2000,'Development')
aakash.describe()
dharmendra.work()