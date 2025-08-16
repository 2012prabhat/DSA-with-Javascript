function numberPyramid(n) {
  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j < n-i; j++) {
        str += j+1+" "
    }
    console.log(str);
  }
}



function numberPyramid2(n) {
  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j <= i; j++) {
        str += j+1+" "
    }
    console.log(str);
  }
}

numberPyramid(5);
console.log("   ")
numberPyramid2(5);
