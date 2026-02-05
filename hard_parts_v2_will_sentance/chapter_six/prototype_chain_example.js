// OLD 
function userCreator(name, score) {
    const newUser = {};
    newUser.name = name;
    newUser.score = score;
    newUser.increment = function() {
        newUser.score++;
    };

    return newUser;
};
const aUser = userCreator('Almin', 5);
const bUser = userCreator('Balmin', 4);


// NEW 
function betterUserCreator(name, score) {
    const betterNewUser = Object.create(userFunctionStore);
    betterNewUser.name = name;
    betterNewUser.score = score;
    return betterNewUser;
};

const userFunctionStore = {
    increment: function() {
        this.score++;
    },

    login: function() {
        console.log("Logged in!");
    }
}

const u1 = userCreator("Haris", 1);
const u2 = userCreator("Tarik", 2);
u1.increment();
u1.hasOwnProperty('score'); // true 

/*
 Why is this code better ? (My Words)
 - Because in the first creation of user objects, for every new user object it will create a new identical function
 - It is redundant, it is less efficient, less performance
 - In the new code, at every creation, it ALWAYS uses the same two functions from the userFunctionStore object 
 - Why can we do this? PROTOTYPE CHAINING 
 
const betterNewUser = Object.create(userFunctionStore); 
(Here we create new object `betterNewUser` that extends other object (prototype type))
(It will not have its properties locally, but it will have a linking to it so it can use its properties (methods in this example))
- betterNewUser.[[Prototype]] => userFunctionStore (not copying, just linking)
- name & score are local properties, they are inside betterNewUser

Main question - where are the methods?
They are inside userFunctionStore
All instances are being shared, only ONE increment and only ONE login function are in the memory
SO now, if we have 500 users, they will all use the same two function, not 1000 - much better

So how does u1.increment(); work now?

This is what JS does :

1. looks for increment() in u1 -> X
2. u1.[[Prototype]] => userFunctionStore 
3. finds increment()
4. this => u1 
5. this.score++; (basically u1.score++) changes the score

Also important notice :

at `u1.increment()`, `this` shows at `u1` because method is called as `u1.increment()`
userFunctionStore is just the place where the method is defined, but the caller `u1` determines `this`


Lets also do some things with this keyword
*/

function thisUserCreator(name, score) {
    const newUser = Object.create(thisUserFunctionStore);
    newUser.name = name;
    newUser.score = score; 
    return newUser;
}

const thisUserFunctionStore = {
    increment: function() {
        function add1(){ this.score++ };
        add1();
    }
};

const thisUser1 = thisUserCreator('Harkiz', 44);
const thisUser2 = thisUserCreator('Diva', 199);
thisUser1.increment(); // mental model : increment(thisUser1);

/* 
 In this example, `this` wont show as thisUser1
 Because add1() is a default function call, it does not have OBJECT before call 
 this === undefined

 How can we fix this? - ARROW FUNCTIONS 
    increment: function() {
        const add1 = () => { this.score++; };
        add1();
    }

    Because arrow functions will look outside its local scope and bind this explicitly
    this is determined by function call, not by the place it is defined


    But still, why does it create a problem with add1() function inside increment()
    - `thisUser1.increment();` => call function increment as a method for an object thisUser1 (this === thisUser1)
    - the point is that function `add1()` is not called to be the method for thisUser1, thats why this !== thisUser1 for add1() function

    But we have a solution for that also 

    increment: function() {
        function add1() {
            this.score++;
        }
        add1.call(this); - js ties `this` in `add1` on `thisUser1` 
    }


    we also have .apply(), .bind() - with which we can manually control `this` context when calling a function

    But why do we do this? 
    - We can have a lot more complex logic, so we break it down, improve code readability ... 

    Lets not forget, arrow functions are automatically lexically scoped  
*/

