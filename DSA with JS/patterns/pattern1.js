const prompt = require('prompt-sync')();
const n = prompt('Enter the number of rows ');

for(let j=1;j<=n;j++){
    for(let i=1;i<=n;i++){
        process.stdout.write("* ");
    }
    console.log()
}
