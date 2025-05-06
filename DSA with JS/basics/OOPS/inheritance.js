class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    introduce(){
        console.log((`Hii i am ${this.name} and ${this.age}`));
    }
}

const person1 = new Person("Prabhat Kumar", 26);
person1.introduce();


class Student extends Person{
    constructor(name,age,grade){
        super(name,age)
        this.grade = grade;
    }
    introduceWithGrade(){
        console.log((`Hii i am ${this.name} my age is ${this.age} and my grade is ${this.grade}`));
    }
}

const student1 = new Student('Prabhat Kumar',27,"A");
student1.introduceWithGrade();
