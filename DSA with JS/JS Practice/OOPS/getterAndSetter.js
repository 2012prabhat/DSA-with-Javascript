class Product{
    constructor(name,price){
        this.name = name;
        this._price = price;  // price is private here
    }

    //getter 
    get price(){
        return `Rs ${this._price}`
    }

    //setter
    set price(value){
        if(value<0){
            console.log("Price cannot be negative.");
        }else{
            this._price = value;
        }
    }

    static add(a, b) {
        console.log(a+b);
    }
}

const p1 = new Product('Laptop',30000);
p1.price = 1000;
console.log(p1.price)

// static is called directly on the class, not on an object
Product.add(3,5)
// p1.add(5,8)  this is incorrect 




class BankAccount{
    constructor(balance){
        this._balance = balance;

    }

    get balance(){
        return `Your balance is ₹${this._balance}`
    }

    set balance(value){
        if(value<0){
            console.log("Invalid amount. Deposit must be positive.");
        }else{
            this._balance += value 
        }
    }


    deposit(amount){
            this.balance = amount;
    }


}



const account1 = new BankAccount(1000);
account1.deposit(200)
let result = account1.balance
console.log(result)
