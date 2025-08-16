function getPattern(n) {
  for (let i = 0; i < n; i++) {
    let str = "";

    for (let j = 0; j < n - i - 1; j++) {
      str += " ";
    }

    // print star
    for (let k = 0; k < 2 * i + 1; k++) {
      str += "*";
    }

    console.log(str);
  }
}

function invertedPyramid(n) {
  for (let i = n; i >= 0; i--) {
    let str = "";

    for (let j = 0; j < n - i; j++) {
      str += " ";
    }

    for (let j = 0; j < 2 * i - 1; j++) {
      str += "*";
    }
    console.log(str);
  }
}

console.log("\nTriangle Pyramid\n");

getPattern(5);
console.log("\nInverted Pyramid\n");
invertedPyramid(5);
