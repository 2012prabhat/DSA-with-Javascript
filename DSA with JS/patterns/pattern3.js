// Right-Aligned Half Pyramid

const prompt = require('prompt-sync')();
const n = prompt('Enter the number of rows ');

for(let i=1;i<n;i++){
    for(let j=1;j<=n;j++){
        if(j>n-i){
            process.stdout.write("* ");
        }else{
            process.stdout.write("  ");
        }
    }
    console.log("")
}
