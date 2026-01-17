function copyArrayAndManipulateAgain(array, instructions) {
    const output = [];
    for (let i = 0; i < array.length; i++) {
        output.push(instructions(array[i]));
    }
    return output;
}

/* 
const multiplyByFive = input => input * 5;
const result = copyArrayAndManipulateAgain([1,2,3],multiplyByFive);
*/

const myArray = [1,2,3];
const result = copyArrayAndManipulateAgain(myArray, input => input * 5);

