function Person(name){
    this.name = name 
}

Person.prototype.sayHello = function(){
    console.log("Hello this is " + this.name)
}

const person1 = new Person("Prabhat");
person1.sayHello()