// 🔹 call() — Calls the function immediately, with a given this and arguments passed individually

function greet(name){
    console.log(`This is ${name}`)
    // console.log(this)
}



greet.call(null,'Prabhat Kumar')


const person = {
    printName:function(){
        console.log(this.name)
    }
}

const person1 = {
    name:"Prabhat Kumar",
    age:28
}

person.printName.call(person1)