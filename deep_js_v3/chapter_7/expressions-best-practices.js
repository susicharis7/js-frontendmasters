/* 
Three main reasons to prefer NAMED Function Expression : 
1. Reliable Self Reference
2. Better Stack Trace
3. Self-documenting code
*/


// 1. Reliable Self Reference

var fn = function() {
    return fn();
};

var other = fn;
fn = null;

other(); 

/* 
 In this example above, at the 'other' invocation, it will crash
 The reason for that is because function is trying to call fn, but that reference
 is no longer referencing the function 
*/

var fn = function test() {
    return test();
};

var other = fn;
fn = null;
other();
/* 
    Now it works
    The reason for that is becaue in this example, other is referencing to a function object
    Then we declare fn to reference null, but other still references the function object named test
    When we invoke it, it is callable, and it works
*/


// 2. Better Stack Trace 
var fn = function() {
    throw new Error("Fail");
};

/* 
 This is a problem because at stack trace we get something like this : 
   
    Error: fail 
         at <anonymous> 

There is no name, it is hard to find which function crashed our app if we have more of them
IF we have only 1/2, then it is ok
*/

var fn = function newFun() {
    throw new Error("Better fail");
};

/* 
    Now it writes out the name of the function that crashed
    Which is better for knowing where to fix the error
*/

// 3. Self-documenting code

var fn = function fetchUserData() {  }
/* 
 This is perfect, we call it self documenting code because we know exactly what it is doing. 
 If someone reads our code, he can clearly see what it does.
*/


