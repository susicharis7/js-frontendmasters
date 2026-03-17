function teacher() { // Function Declaration
    /* ... */
};

var myTeacher = function anotherTeacher() { // Function Expression
    console.log(anotherTeacher);
};

console.log(teacher);
console.log(myTeacher);
console.log(anotherTeacher); // ReferenceError

/*
    We get ReferenceError because the binding is only inside that function 
    We don't even have it in the chain

    What is the key difference here ?

    - Function Declaration
    - `teacher` binding is created in compile time
    - it is immediately connected to function object, which means it is not undefined
    - it is completely hoisted before execution phase

    - Function Expression
    - in compile phase, myTeacher -> undefined
    - function expression is evaluated only at execution phase 

    In this case, this is a Named Function Expression
    It means that `anotherTeacher` only exists inside function, it doesn't leave that scope 
*/

var clickHandler = function() {
    // Anonymous function expression (function has no name)
};

var keyHandler = function keyHandler() {
    // Named function expression
};


var fn = function test() {
    test = 123;
    console.log(test);
};

fn();