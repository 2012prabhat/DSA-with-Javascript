class Person{
     constructor(name,age){
        this.name = name;
        this.age = age;
     }
     introduce(){
        console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
    }

    static isAdult(age){
        if(age>=18) return true;
        else return false
    }
}


class Student extends Person{
    constructor(name,age,grade){
        super(name,age);
        this._grade = grade;
    }

    get grade(){
        return `Grade ${this._grade}`
    }

    set grade(val){
        if(val<1 || val>12){
            console.log("Invalid grade");
        }else{
            this._grade = val
        }
    }

    study(){
        console.log(`${this.name} is studying`);
    }

   
}

class Teacher extends Person{
    constructor(name,age,subject){
        super(name,age);
        this.subject = subject;
    }

    teach(){
        console.log(`${this.name} is teaching ${this.subject}`)
    }
}




const s1 = new Student("Ravi", 16);
s1.grade = 10;
console.log(s1.grade);  // Grade: 10
s1.study();             // Ravi is studying.
s1.introduce();         // Hi, I'm Ravi and I'm 16 years old.

const t1 = new Teacher("Ms. Seema", 30, "Math");
t1.teach();             // Ms. Seema is teaching Math.
t1.introduce();         // Hi, I'm Ms. Seema and I'm 30 years old.

console.log(Person.isAdult(20)); // true
console.log(Person.isAdult(12)); // false
