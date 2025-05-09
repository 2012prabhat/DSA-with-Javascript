const p1 = new Promise((resolve, reject) => {
    let isSuccess = true;
    if (isSuccess) {
        setTimeout(() => {
            resolve({ name: "Prabhat", age: 26 });
        }, 2000);
    } else {
        setTimeout(() => {
            reject("Failed to fetch user data");
        }, 2000);
    }
});

p1.then((data) => {
    console.log("User Data:", data.name);
}).catch((err) => {
    console.log("Error:", err);
});


// promise chaining 

p1.then((data)=>{
   return data.name;
}).then((data)=>{
    console.log(data)
    return data
}).then((data)=>{
    console.log(data.toUpperCase())
})