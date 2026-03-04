var myAge = Number("0o46"); // 38
var myNextAge = Number("39") // 39
var myCatsAge = Number("n/a"); // NaN (invalid, better said)
myAge - "my son's age"; // NaN

myCatsAge === myCatsAge; // false ?

// isNaN() - prvo radi ToNumber(value), onda provjerava da li je rezultat NaN 

isNaN(myAge); // false (it is a number)
isNaN(myCatsAge); // true
isNaN("my son's age"); // true 

// Doesn't do COERCION like isNaN() (since ES6), it strictly checks if it is a NaN 
Number.isNaN(myCatsAge); // true
Number.isNaN("my son's age"); // false 

typeof NaN // number


