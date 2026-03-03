var myAge = Number("0o46"); // 38
var myNextAge = Number("39") // 39
var myCatsAge = Number("n/a"); // NaN (invalid, better said)
myAge - "my son's age"; // NaN

myCatsAge === myCatsAge; // false ?

isNaN(myAge); // false 
isNaN(myCatsAge); // true
isNaN("my son's age"); // true ?? it is not a number, true, but is it a NaN value? no - it coerces value to numbers before it checks !

// since ES6, it doesn't do any coercion 
Number.isNaN(myCatsAge); // true
Number.isNaN("my son's age"); // false 

typeof NaN // number


