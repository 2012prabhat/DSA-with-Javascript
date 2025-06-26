const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
         reject("Promise Rejected");
    },1000)
})

const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
         resolve("Promise Rejected");
    },1000)
})

Promise.race([p1,p2]).then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
})