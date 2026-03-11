/*
    People tend to say that the real problem is the `==`
    But let's look at this example
*/

var ws1Count = 42;
var ws2Count = [42];

if (ws1Count === ws2Count) {
    /*
     It will return false, since strict comparison doesn't allow 
     coercion and it fails immediately after checking the type
    */
};

if (ws1Count == ws2Count) {
    /*
     Now this is a much better option
     It will see a comparison between a Number and an Object
     It will invoke the abstract algorithm ToPrimitive
     valueOf will return the same object (Arrays are objects), 
     it will stringify it, we will get 42 == "42", then because
     Double comparsion loves ToNumber algorithm, we will get
     42 == 42 which is true.
    */
}

