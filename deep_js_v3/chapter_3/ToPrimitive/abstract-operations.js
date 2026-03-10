// ToPrimitive

const obj = { a: 5};
a + 1; 

/*
    + doesn't know how to add object & number
    so what the JS engine first does is : ToPrimitive(obj)

    We have `ToPrimitive(hint)`
    This `hint` is very important because it is a hint value
    Let's see how it works
*/

const secObj = {
    valueOf() { return 10; },
    toString() { return 'Hello'; }
};

secObj + 5;

/*
    This is the path :
    ToPrimitive(secObj) -> valueOf() -> 10 -> Primitive found -> 10 + 5 = 15
    But let's look at the second option
*/

const thirdObj = {
    valueOf() { return {} }, // returns an object now
    toString() { return '20'}
};

thirdObj + 5;

//    Now : ToPrimitive(thirdObj) -> valueOf() -> object -> ignore -> toString() -> '20' -> '20' + 5 -> '205'


// But what if we both have objects? (non primitive type)
const fourthObj = {
    valueOf() { return { } },
    toString() { return {} }
};

fourthObj + 3; // TypeError - It cannot convert object to primitive value



/* Full steps for ToPrimitive: 

    ToPrimitive(input, preferredType)

    if input is not Object
        return input

    exoticToPrim = GetMethod(input, Symbol.toPrimitive)

    if exoticToPrim exists
        result = Call(exoticToPrim, input, hint)

        if result is primitive
            return result
        else
            throw TypeError

    else
        return OrdinaryToPrimitive(input, preferredType)
*/

const aObj = {
    [Symbol.toPrimitive](hint) {
        console.log("Symbol.toPrimitive called with: ", hint);
        return 10;
    },

    valueOf() {
        console.log("valueOf called");
        return 20;
    },

    toString() {
        console.log("toString called");
        return '30';
    }
};

aObj + 5;

/*
    This is how it works
    - We have `aObj + 5`; , + doesn't know how to work with Object + Number
    - So the specification says : ToPrimitive(obj, 'default');
    - It checks if the input is object -> it is -> continues the algorithm 
    - Then we have GetMethod(aObj, Symbol.toPrimitive)
      In our object we have [Symbol.toPrimitive](hint) {...}
      That's why exoticToPrim = function
    - Now we have to specify hint value
      Since + operator did not give us preferred type, hint = default (by spec)
    - Then we have Call() abstract operation 
      result = Call(exoticToPrim, aObj, default); -> aObj[Symbol.toPrimitive]("default")
      It calls our first function inside object
    - Then if result is not an object -> return result -> 10 is primitive -> ToPrimitive(obj) -> 10
    10 + 5 = 5
*/


