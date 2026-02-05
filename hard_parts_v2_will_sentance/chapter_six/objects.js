const freshUser = {};

// assigning properties to that object - object dot notation
freshUser.name = "Harke";
freshUser.score = 6;
freshUser.increment = function() {
    freshUser.score++;
}

// Object.create

const proto = {
    greet() {
        console.log("hi");
    }
};

// obj can now greet also 
const obj = Object.create(proto); 

// Empty Object
Object.create(null);

const secondFreshUser = Object.create(null);
user3.name = "Eva";
user3.score = 9;
user3.increment = function() {
    user3.score++;
}


// We are breaking our DRY Principle ... Lets create a function
function userCreator(name, score) {
    const newUser = {};
    newUser.name = name;
    newUser.score = score;
    newUser.increment = function() {
        newUser.score++;
    };

    return newUser;
};

// But still this creates a problem
// Lets say we have 500 users 
// That means we will have 500 identical functions? because of newUser.score? 
// This is where the Prototype will come in hand later on
const aUser = userCreator('Almin', 5);
const bUser = userCreator('Balmin', 4);
aUser.increment();



