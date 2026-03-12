/* We should never compare a value with a negation of itself */

[] == ![]; // true

/* 
    Before `==`, `!` will be done (Before loose comparison, logical NOT operator comes first)
    Rules for it from ECMAScript is: 
        1. Let value = ToBoolean(argument)
        2. If value is true → return false
        3. If value is false → return true
    Because all arrays are truthy, it will return true, so we will have !true => false
    Now we have [] == false (Object == boolean)
    Now, ToPrimitive on the left side
    valueOf() will return the same array, but toString will return us an empty string ""
    Now we have String == Boolean ("" == false)
    We have a rule from ECMAScript, if y is boolean -> ToNumber
    false = 0, so now we have ("" == 0)
    And since it loves to numerize more than anything, ToNumber on the left side
    0 == 0 -> types are the same => Strict equality
    0 === 0 -> true    
*/


var workshopStudents = [];

if (workshopStudents) { 
    /*
        This invokes ToBoolean
        Since arrays are truthy, it returns TRUE 
        This is the best case scenario to check for true/false 
    */
}

if (workshopStudents == true) {
    /*
        Now this becomes a problem
        workshopStudents is an array, which is an object, so ToPrimitive
        It returns us an empty string
        "" == true 
        "" == 1
        0 == 1 -> same types
        0 === 1 -> false
    */
}

if (workshopStudents == false) {
    /* 
        Now this works, and `== true` doesn't
    */
}

 