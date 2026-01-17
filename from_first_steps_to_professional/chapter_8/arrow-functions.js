function square(x) {
    return x * x;
}

// is the same as:

const square = (x) => x*x;

let firstName = "Haris"
let secondName = "Susic"
const firstAndLastName = (firstName, lastName) => firstName + " " + lastName;

// Sta ako zelimo vise od samo returna?
const addAndLog = (x,y) => {
    let sum = x + y;
    console.log("The sum is: ", sum);
    return sum;
}

