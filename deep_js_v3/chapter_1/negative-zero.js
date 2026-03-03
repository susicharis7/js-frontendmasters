var trendRate = -0; 
trendRate === -0; // true

trendRate.toString(); // "0"


trendRate = -0;
trendRate === "0" // true ?

trendRate < 0; // false
trendRate > 0; // false

// Since `===` is strict WITH SOME LIES, they decided to add another equals operator
// This one is strict with zero lies, if it is -0 -> it returns true 
Object.is(trendRate, -0); // true ?
Object.is(trendRate, 0); // false


// What about Math.sign ?
Math.sign(-3); // -1  
Math.sign(3); // 1
Math.sign(-0); // -0 ?? 
Math.sign(0); // 0 ??

// we can fix it by creating our own
function sign(value) {
    return value !== 0 ? Math.sign(value) : Object.is(v, -0) ? - 1 : 1;
};

sign(-3); // -1
sign(3); // 1
sign(-0); // -1 
sign(0); // 1 


