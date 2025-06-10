const prompt = require('prompt-sync')();
const n = prompt('Enter the number of rows ');

for (let i = 1; i <= n; i++) {
  let row = '';
  
  // Print spaces
  for (let space = 1; space < i; space++) {
    row += ' ';
  }

  // Print stars
  for (let star = 1; star <= 2 * (n - i) + 1; star++) {
    row += '*';
  }

  console.log(row);
}

