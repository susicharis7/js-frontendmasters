"use strict";

var teacher = "Kyle";

function otherClass() {
    teacher = "Suzy";
    teacher = "React"; // In strict mode it will throw ReferenceError 
    console.log("Welcome");
};

otherClass();

// ReferenceError occurs when a variable cannot be found in the scope chain
// It indicates that the variable has not been declared / not accessible
// Just like with examples for Temporal Dead Zone



