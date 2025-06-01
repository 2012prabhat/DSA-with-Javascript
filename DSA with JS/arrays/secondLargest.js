function getSecondLargest(arr) {
  if (arr.length < 2) {
    console.log("Array has less than 2 elements");
    return null;
  }

  let max = -Infinity;
  let secondMax = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
    } else if (arr[i] > secondMax && arr[i] < max) {
      secondMax = arr[i];
    }
  }

  // If all elements are the same (no second largest)
  if (secondMax === -Infinity) {
    console.log("All elements are equal");
    return null;
  }

  return secondMax;
}

const arr1 = [5, 5, 5, 5];
console.log(getSecondLargest(arr1)); // null ("All elements are equal")
console.log(getSecondLargest([1, 3, 2, 4])); // 3
console.log(getSecondLargest([4, 1, 4, 3])); // 3