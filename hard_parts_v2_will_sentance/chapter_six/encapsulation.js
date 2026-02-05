const user1 = {
    name: "Haris",
    score: 3,
    increment: function() {
        this.score++;
    }
};

const user2 = {
    name: "Samir",
    score: 4,
    increment: function() {
        this.score++;
    }
}


user1.increment();
user2.increment();


/* 
    Why is this encapsulation ?
    - Method (increment) doesn't know the name of the object
    - Object changes its data through its methods, not from outside 
    - Here we are just showing the concept of Encapsulation, JS does allow right now to change the
      function from the outside or to change the score, but we also have private properties,
      closures that we learnt etc...
*/


/* 
    First Principle : Object data is not changed from the outside, but from the methods inside that object
*/
const user3 = {
    name: "Haris",
    score: 3
}

user3.score++; // outside code changes the state
user3.score = -5; // anyone can put invalid value
