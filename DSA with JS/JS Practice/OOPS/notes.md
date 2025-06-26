Object-Oriented Programming (OOP) in JavaScript - Complete Notes
1. What is OOP?
OOP (Object-Oriented Programming) is a programming paradigm that organizes code into objects (data + behavior) rather than functions and logic.

Key Concepts:
Class → Blueprint for creating objects.

Object → Instance of a class.

Encapsulation → Bundling data and methods that work on that data.

Inheritance → Child classes inherit properties/methods from parent classes.

Polymorphism → One method behaves differently in different contexts.

Abstraction → Hiding complex logic, exposing only necessary features.

2. OOP in JavaScript
JavaScript uses prototype-based OOP (not class-based like Java/Python). ES6 introduced class syntax (syntactic sugar over prototypes).

A. Creating Objects
(i) Object Literal (Simple Object)
javascript
const person = {
  name: "John",
  age: 30,
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
};
person.greet(); // "Hello, I'm John"
(ii) Constructor Function (Pre-ES6)
javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function() {
    console.log(`Hello, I'm ${this.name}`);
  };
}
const john = new Person("John", 30);
john.greet(); // "Hello, I'm John"
(iii) ES6 Class Syntax
javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
}
const john = new Person("John", 30);
john.greet(); // "Hello, I'm John"
3. The 4 Pillars of OOP in JavaScript
A. Encapsulation
Bundling data and methods, controlling access via:

Public fields → Accessible anywhere.

Private fields (#) → Only accessible inside the class.

javascript
class BankAccount {
  #balance = 0; // Private field

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const acc = new BankAccount();
acc.deposit(100);
console.log(acc.getBalance()); // 100
console.log(acc.#balance); // Error (Private field)
B. Inheritance
Child classes extend parent classes using extends.

javascript
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks!`);
  }
}

const dog = new Dog("Rex");
dog.speak(); // "Rex barks!"
C. Polymorphism
Same method behaves differently in different classes.

javascript
class Bird extends Animal {
  speak() {
    console.log(`${this.name} chirps!`);
  }
}

const bird = new Bird("Tweetie");
bird.speak(); // "Tweetie chirps!"
D. Abstraction
Hide complex logic, expose only necessary features.

javascript
class Car {
  #engineStatus = "off"; // Private

  startEngine() {
    this.#engineStatus = "on";
    console.log("Engine started");
  }

  checkEngine() {
    return this.#engineStatus;
  }
}

const car = new Car();
car.startEngine();
console.log(car.checkEngine()); // "on"
console.log(car.#engineStatus); // Error (Private)
4. Static Methods & Properties
Belong to the class itself, not instances.

javascript
class MathUtils {
  static PI = 3.14;

  static square(x) {
    return x * x;
  }
}

console.log(MathUtils.square(5)); // 25
console.log(MathUtils.PI); // 3.14
5. Getters & Setters
Control access to object properties.

javascript
class User {
  constructor(name) {
    this._name = name; // Convention: _ means "private"
  }

  get name() {
    return this._name.toUpperCase();
  }

  set name(newName) {
    if (newName.length < 3) throw new Error("Name too short");
    this._name = newName;
  }
}

const user = new User("John");
console.log(user.name); // "JOHN" (getter)
user.name = "Alice"; // setter
6. Prototypal Inheritance (Behind the Scenes)
JavaScript uses prototype chains (not classical inheritance).

javascript
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function() {
  console.log(`Hi, I'm ${this.name}`);
};

function Student(name, grade) {
  Person.call(this, name); // Inherit properties
  this.grade = grade;
}
Student.prototype = Object.create(Person.prototype); // Inherit methods

const student = new Student("Alex", "A");
student.greet(); // "Hi, I'm Alex"
7. When to Use OOP in JavaScript?
✅ Complex apps (e.g., frontend frameworks like React).
✅ Reusable components (e.g., UI libraries).
✅ Data modeling (e.g., game entities, user systems).

8. Key Takeaways
✔ JavaScript OOP uses classes (ES6) or prototypes.
✔ 4 Pillars: Encapsulation, Inheritance, Polymorphism, Abstraction.
✔ Use # for private fields, static for class-level methods.
✔ Getters/setters control property access.