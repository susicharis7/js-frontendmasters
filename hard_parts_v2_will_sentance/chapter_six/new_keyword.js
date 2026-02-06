/* Reference 

    function betterUserCreator(name, score) {
        const betterNewUser = Object.create(userFunctionStore);
        betterNewUser.name = name;
        betterNewUser.score = score;
        return betterNewUser;
    }

    const userFunctionStore = {
        increment() {
            this.score++;
        }
    };

    const thisUser1 = betterUserCreator('Harkiz', 44);
    const thisUser2 = betterUserCreator('Diva', 199);

*/


function User(name, score) {
    this.name = name;
    this.score = score;
}

User.prototype.increment = function () {
    this.score++;
}

const u1 = new User('Haris', 1);

/* 
    At the start, `u1` => unitialized
    Then, JS Internally does this :
        1. Inside function, name = Haris ; score = 1;
        2. Creates new object : `obj = {}` (literally obj, later it is passed to u1)
        2.1. we have `this` keyword which is directed to that newly created object inside that function
        2.2. in that new object, `name` and `score` properties are created and passed the values from the parameters of the function
        3. That new object, as we learned, also has [[Prototype]] (__proto__) 
           So it will connect the links :: `obj.[[Prototype]] => User.prototype 
           User object property `prototype` has another object which has `increment()`
           `obj` can now use Users function (`increment()`)
        4. Then what it does is
             User.call(obj, 'Haris' , 1);
             this = obj;
             then it returns obj -> u1 (return this;)

    We write User.prototype.increment because `new User(..)` automatically does this : obj.[[Prototype]] = User.prototype;
    Anything that we put on User.prototype, obj will have link to it, it is available to all instances 

    The reason we can use properties on function is because functions are both functions AND OBJECTS (when needed)
    It has 2 properties : description & prototype
*/



function userCreator(name, score) {
    this.name = name;
    this.score = score;
}

userCreator.prototype.increment = function() { this.score++ };
userCreator.prototype.login = function() { console.log("Login") };

const user1 = new userCreator('Tarik', 5);
user1.increment();

/* 

    userCreator as we said, has 2 properties when it is an object
    it has description, and prototype
    that prototype, its value is ANOTER OBJECT 
    because of it we can put increment() and login() inside of it
    those functions will be parents to all instances 

    that is why we write userCreator.prototype + `.increment`, because we are creating an increment function,
    the property key is increment and the property value is the function itself that does this.score++;


*/