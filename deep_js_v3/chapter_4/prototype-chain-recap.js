/*
    When we access obj.prop :
    1. Engine checks if `prop` is directly available on `obj`
    2. If false -> go to obj.[[Prototype]]
    3. Check there
    4. Continue untill you reach null 
    5. If not found -> undefined 
*/

function Person(name) {
    this.name = name;
}

Person.prototype.sayHi = function() {
    return "Hi";
};

const p = new Person("Haris"); 
// p -> Person.prototype -> Object.prototype -> null
p.sayHi();
// It works because we have it in Person.prototype


const obj = {};
// obj -> Object.prototype -> null

const arr = [1,2,3];
// arr -> Array.prototype -> Object.prototype -> null 
arr.push(5,6,7);
arr.map();
arr.filter();
// this works because we have these methods on Array.prototype


// __proto__ is accessor that is showing on [[Prototype]]
Object.prototype.__proto__

/*
    return this.[[Prototype]]
    this.[[Prototype]] = newProto
    obj.__proto__ === Object.getPrototypeOf(obj)
*/

const secObj = {};
Object.getPrototypeOf(obj) === Object.prototype; 
obj.__proto__ === Object.prototype; 
Object.prototype.__proto__ === null; 


