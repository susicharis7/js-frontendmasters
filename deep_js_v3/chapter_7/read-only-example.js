var fn = function test() {
    console.log(test);
};

/* 
 - We can say that "fn" is a reference to a function object
 - If we console log fn, we will get function object 
   But, if we do "fn()" it will invoke the function test, which is a function expression
   It can invoke it because the value inside fn is CALLABLE 
   What JS does is : 
     1. Takes value from “fn“
     2. Checks if the value is "callable"
     3. If it is - execute it 
*/ 

x = 5;
x();

/* 
 Now this doesn't work because it is not a function, which means
  it is not callable.
*/


