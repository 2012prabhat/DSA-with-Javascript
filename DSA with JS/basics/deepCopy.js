let people = {
  name: "Prabhat Kumar",
  age: 27,
  gender: "male",
  contactsDetail: {
    mobile: "9711393310",
    address: "Delhi",
    pincode: 110094,
  },
};

let people2 = people; // it do not create copy it only set the refrence
// people2.age = 100

// Shallow Copy

let people3 = { ...people }; // It will create shallow copy
people3.age = 100; // It is working fine
people3.contactsDetail.mobile = null; // It will not working fine because it the second level it will still referenced in shallow copy.

// deep copy

let people4 = JSON.parse(JSON.stringify(people));
people4.contactsDetail.mobile = "9711393310";

console.log("People object", people);
console.log("People object2", people2);
console.log("People object3", people3);
console.log("People object4", people4);

//make deep copy using recursion

function makeDeepCopy(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  let copyObj = Array.isArray(obj) ? [] : {};
  let keys = Object.keys(obj);

  for (let i = 0; i < keys.length - 1; i++) {
    copyObj[keys[i]] = makeDeepCopy(obj[keys[i]])
  }

  return obj;
}

let deepCopy = makeDeepCopy(people);
deepCopy.contactsDetail.mobile = "9711393310"
console.log('deepCopy',deepCopy);
