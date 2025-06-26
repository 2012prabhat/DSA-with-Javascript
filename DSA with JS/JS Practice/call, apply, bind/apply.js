// 🔹 apply() — Same as call(), but arguments are passed as an array

function greet(name,age){
    console.log(`This is ${name} and my age is ${age}`)
    // console.log(this)
}


greet.apply(null,['Prabhat',26]);