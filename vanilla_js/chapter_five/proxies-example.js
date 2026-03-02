const user = {
    name: "Haris",
    age: 23,
};

user.name;
user.age = 25;

const proxy = new Proxy(user, {
    get(target, prop) {
        console.log("Reading: ", prop);
        return target[prop];
    }
});

/*
    new Proxy(target, handler)
    - target is original object (user)
    - handler is object with trap functions 
    - get is function that is invoked every time someone reads the property 

    Also, proxies only work with objects !
*/

proxy.name;
/*
    get function is invoked
    prop is "name"

    target[prop] -> user["name"] -> "Haris"
*/



const original = {
    name: 'John Doe',
    age: 30,
};

const handler = {
    get: function(target,prop) {
        if (prop == 'age') {
            return target[prop] + ' years old';
        } else {
            return target[prop];
        };
    },
};

const ogProxy = new Proxy(original, handler);
console.log(ogProxy.age);


// we can also use it for validation
const secHandler = {
    get: (target, prop, value) => {
        if (prop == 'age' && typeof value !== 'number') {
            throw new TypeError('Age not a number');
        } else {
            target[prop] = value;
        };
    },
};


const secOgProxy = new Proxy(original, secHandler);
secOgProxy = 40;
secOgProxy = "hey"; // Error