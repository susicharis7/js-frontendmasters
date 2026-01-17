/* 3rd video
 * In the console, declare the following functions:
 * multiply: given 2 numbers, return their product
 * yell: given lowercase string, log it in all caps to the console
 * longerThan: given 2 arrays, return whether the first is longer than the second
*/

function multiply(a,b) {
    return a * b;
}
const firstTask = multiply(10,5)


function yell(lowerToUpper) {
    return lowerToUpper.toUpperCase();
}
const secondTask = yell("harkiz")


function longerThan(arr1, arr2) {
    if (arr1.length > arr2.length) {
        return true; 
    }
    return false;
}

// or

function secondWayLongerThan(arr1,arr2) {
    return arr1.length > arr2.length;
}


arr1 = [1,2,3,4,5]
arr2 = [1,2,3]
const thirdTask = longerThan(arr1,arr2)


/* 5th video
 * In the console, declare the following functions using arrow functions:
 * divide: given 2 numbers, return the first divided by the second
 * whisper: given an uppercase string, log it in all lowercase to the console
 * shorterThan: given 2 arrays, return whether the first is shorter than the second
*/

const divide = (x,y) => x / y;
const whisper = (word) => console.log(word.toLowerCase());
const shorterThan = (a1, a2) => a1.length < a2.length ? true : false; 

