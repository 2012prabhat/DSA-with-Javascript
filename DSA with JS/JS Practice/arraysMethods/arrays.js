const arr = [1,2,3,4,5,10,11,22,12,32,43,43];

// shift and unshift  method:-
// arr.shift()  // removes the 0th index element
// arr.unshift(112) // add the element to the 0th index
// console.log(arr)

const arr2 = arr.slice(0,3);
// console.log(arr2)


// splice function 
const deletedElem = arr.splice(2,2)
console.log(deletedElem)
console.log(arr)

const newArr = arr.map((m)=>m*2);
console.log("Doubled array is ",newArr);


const filteredArr = arr.filter(f=>f%2==0);
console.log(filteredArr)

// some 
console.log(arr.some(m=>m==32)) // it checks whether 32 is present atleast one time in arr

// every
console.log(arr.every(m=>m%2==0)) // it checks every whether every element is even is or not in array

console.log(arr.includes(132))  // it checks the existence of the element 

console.log(arr.find(f=>f>31))

console.log(arr.findIndex(f=>f==1))


// reduce 
const arr1 = [10,20,30];
const arr1Sum = arr1.reduce((acc,val)=>acc+val);
console.log(arr1Sum);


const nestedArr = [1,2,3,4,[5,6,7],[8,9,10,[11,12,[13,14]]]];
console.log(nestedArr.flat(Infinity));
// It takes parameter with number of levels to flat the array

const mappedThenFlattened = nestedArr.map(x => [x * 2]).flat(2);
console.log(mappedThenFlattened)














