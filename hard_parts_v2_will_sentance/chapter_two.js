function tenSquared() {
    return 10 * 10;
}

function nineSquared() {
    return 9 * 9;
}

// We can generalize these two functions to make them "Generalized Function"
function squareNum(num) {
    return num * num;
}

const firstNum = squareNum(10); // firstNum = 1000, just like tenSquared()

function multiplyByThree(number) {
    return number * 3;
}

function manipulateAndAdd(arr, instruction) {
    const output = [];
    for (let i = 0; i < arr.length; i++) {
        output.push(instruction(arr[i]));
    }

    return output;
}

const firstValue = manipulateAndAdd([1,2,3], multiplyByThree);


// Code from Chapter 2 Video

function copyArrayAndMultiplyBy2(array) {
    const output = [];
    for (let i = 0; i < array.length; i++) {
        output.push(array[i] * 2);
    }

    return output;
}

const myArray = [1,2,3];
const result = copyArrayAndMultiplyBy2(myArray);


function copyArrayAndDivideBy2(myArray) {
    const output = [];
    for (let i = 0; i < array.length; i++) {
        output.push(array[i] / 2);
    }

    return output;
}

const secondResult = copyArrayAndDivideBy2(myArray);

// This way, we don't have generalized functions, which means if we want maybe to add 3 now, we would have to do another function and rewrite everything again
// That's why we have GENERALIZED FUNCTIONS, and in parameter we have CALLBACK Function
// This is also a higher-order function
function copyArrayAndManipulate(array, functionality) {
    const output = [];
    for(let i = 0; i < array.length; i++) {
        output.push(functionality(array[i]));
    }

    return output;
}

function addThree(number) {
    return number + 3;
}

const thirdResult = copyArrayAndManipulate([1,2,3],addThree);

// Closure

// kasnije preci ovu funkciju i shvatiti je 
function outer() {
  let count = 0;

  function inner() {
    count++;
    return count;
  }

  return inner;
}

const myFn = outer();
myFn();

// Arrow Functions
multiplyBy2(50); // This works even if the function is after this call
function multiplyBy2(input) {
    return input * 2;
}

multiplyBy69(5); // This doesn't work 
const multiplyBy69 = (input) => {return input * 69};

const multiplyBy3 = input => input * 3;
