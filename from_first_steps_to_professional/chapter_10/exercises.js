/* Second Video */

let firstName = "Haris";
let lastName = "Susic";

if (firstName.length > lastName.length) {
    console.log("Your name is longer than your surname");
} else if (firstName.length < lastName.length) {
    console.log("Your surname is longer than your name");
} else {
    console.log("They are equal size!");
}


function isEmpty(array) {
    if (array.length == 0) {
        console.log("Array is empty.");
    } else {
        console.log("It is not empty.");
    }
}

let names = ["Haris" , "Kralj" , "King", "Car" , "Tooo"];

isEmpty(names);




function isTruthyOrFalsy(array) {
    if (array == 0) {
        console.log("Array is falsy");
    } else {
        console.log("Array is truthy");
    }
    
}

let arr1 = "";
let arr2 = [1, 2, 3];

isTruthyOrFalsy(arr1);
isTruthyOrFalsy(arr2);





let forecast = "Sunny"
let mood = forecast === "Sunny" ? "Happy" : "Sad";
console.log(mood);

