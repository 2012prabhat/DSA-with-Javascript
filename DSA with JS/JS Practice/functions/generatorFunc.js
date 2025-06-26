function* generatorFunction(){
    yield 'First Value';
    yield 'Second Value';
    yield 'Third Value';
}

const functionCall = generatorFunction();
console.log(functionCall.next())
console.log(functionCall.next())
console.log(functionCall.next())
console.log(functionCall.next())
console.log(functionCall.next())