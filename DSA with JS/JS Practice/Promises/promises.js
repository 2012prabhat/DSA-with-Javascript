
const promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise Resolved")
    },3000)

    reject("Promise Rejected")
})


promise1.then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
})

