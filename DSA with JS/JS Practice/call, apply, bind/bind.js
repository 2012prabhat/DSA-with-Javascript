// 🔹 bind() — Returns a new function with this and optional arguments bound, but does not call it immediately
function greet(name,age){
    console.log(`This is ${name} and my age is ${age}`)
    // console.log(this)
}

const sayHello = greet.bind(null, "Prabhat",26);
sayHello();
// Output: Hello, Prabhat
