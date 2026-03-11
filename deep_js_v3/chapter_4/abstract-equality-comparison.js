// Testing by following ECMAScript rules

// 1. If Type(x) is the same as Type(y), then return the result of performing Strict Equality Comparison x === y.
console.log(5 == 5);
console.log(5 == 6);
console.log("abc" == "abc");   
console.log("abc" == "def");

/*
 If both operands are of the same type, `==` instantly becomes `===`
 No coercion, no changing types, just strict equality
 But what if we have same objects?
*/

console.log({} == {});
/*
 Although these are the same objects, same values, but these are OBJECTS
 They are actually not the same object in memory, that's why the result is FALSE
 They are the same type, so the strict equality goes on the reference, not on the value
*/

// Also false:
console.log([] == []); 



// 2. If x is null and y is undefined, return true.
// 3. If x is undefined and y is null, return true.
console.log(null == undefined); // true
console.log(undefined == null); // true

console.log(null === undefined); // false

// 4. If Type(x) is Number and Type(y) is String, return the result of the comparison x == ! ToNumber(y)
// String is converting to a Number
console.log(5 == "5");
/*
    x == y
    Number == String
    x == ToNumber(y)
    Number == Number -> Strict Equality (First Rule)
    Number === Number -> true
*/

// What if we have a string that is not a number inside?
console.log(5 == "hello");
/*
    x == y
    Number == String
    x == ToNumber(y) 
    ToNumber("hello") -> NaN 
    5 == NaN -> false
*/


// 5. If Type(x) is String and Type(y) is Number, return the result of the comparison ! ToNumber(x) == y.
// Also, String is converting to a Number
console.log("5" == 5);

// 6. If Type(x) is Boolean, return the result of the comparison ! ToNumber(x) == y
// If the left operand is Boolean, firstly it is converted into a Number
console.log(true == 1);
/*
    x == y
    Boolean == something (Number)
    ToNumber(x) == something 
    1 == 1 -> Strict Equality -> true 
*/

console.log(true == "1");
/*
    x == y
    Boolean == String 
    ToNumber(x) == String
    Number == String (4th Rule)
    Number == ToNumber(y)
    1 == 1 -> Strict equality -> 1 === 1 -> Number === Number -> true
*/

// 7. If Type(y) is Boolean, return the result of the comparison x == ! ToNumber(y)
// Same for both sides

// 8. If Type(x) is either String, Number, or Symbol and Type(y) is Object, return the result of the comparison x == ToPrimitive(y)
// 9. If Type(x) is Object and Type(y) is either String, Number, or Symbol, return the result of the comparison ToPrimitive(x) == y

console.log(5 == new Number(5));
/*
    x == y
    Number == NumberObject 
    5 == ToPrimitive(NumberObject) -> NumberObject.valueOf() -> 5 
    5 == 5 -> Strict equality -> true 
*/

// 10. return false
