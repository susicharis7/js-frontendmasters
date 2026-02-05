/* 
[[Prototype]] - intern link that that every object contains
Connects object with other object (his parent) so that JS can look up for stuff there
*/

const obj = {};
obj.toString();

// Object.prototype - default JS object that contains common(zajednicke) methods for ALL objects
// ex. toString, hasOwnProperty, valueOf ect...

const obj2 = {}; // obj2.[[Prototype]] -> Object.prototype 

/*
    Here as we said, every object has [[Prototype]], which we use to connect to other object to find some things
    It is used to find some things that are not on the object itself

    IMPORTANT :
    JS first looks for properties on the object, then if it doesnt find it, goes into [[Prototype]]
*/

const obj3 = {
    x: 10
};

// obj.x -> searches for `x` in `obj3 -> finds it -> STOPS -> doesn't go anywhere 
// But how does it work with Object.prototype? Since we said it doesn't go there immediately, and maybe it never will?

obj3.toString();
// It searches `toString` into `obj3` -> doesn't find it -> goes into `obj3.[[Prototype]] -> Object.prototype` -> finds it !










/*
__proto__ - a way to see / change [[Prototype]] of an object (literally a getter/setter for [[Prototype]])
So actually the path to finding toString is : 
    1. looks for toString() locally (obj4) -> X
    2. goes to obj4.__protoPP -> Object.prototype -> Finds it
*/

const obj4 = {};
obj4.toString();
obj4.__proto__ === Object.prototype; // TRUE

// We can change __proto__ (not ideal)
const parent = {a: 1}
const child = {};

child.__proto__ = parent; 
// IMPORTANT NOTICE : PROTOTYPE DOESNT COPY THE PROPERTY - CHILD ONLY HAS LINK TO PARENT
child.a // 1









// Prototype Chain - chain of objects from which JS looks for the property 
const grandParent = {
    a: 1
}

const newParent = Object.create(grandParent);
const newChild = Object.create(newParent);

// newChild -> newParent -> grandParent -> Object.prototype -> null

newChild.a
// looks in newChild -> X -> looks in newParent -> X -> looks in grandParent -> SUCCESS
/*
    child.[[Prototype]]  → parent
    parent.[[Prototype]] → grandparent
    grandparent.[[Prototype]] → Object.prototype
    Object.prototype.[[Prototype]] → null

*/










// Object.getPrototypeOf() - returns the [[Prototype]] of some object
// Object.getPrototypeOf(obj) - tells us who is the parent (prototype) of that object `obj`
const roditelj = { a: 1}
const kidara = Object.create(roditelj);

Object.getPrototypeOf(kidara) === roditelj; // -- TRUE


// hasOwnProperty() method - only returns true if we locally have property 
kidara.a                 // 1
kidara.hasOwnProperty("a") // false
roditelj.hasOwnProperty("a") // true
