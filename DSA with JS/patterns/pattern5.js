const prompt = require('prompt-sync')();
const n = prompt('Enter the number of rows ');

for(let i=1;i<=n;i++){
    for(let j=1;j<=n-i+1;j++){
        process.stdout.write(j+" ")
    }

    console.log()
}
