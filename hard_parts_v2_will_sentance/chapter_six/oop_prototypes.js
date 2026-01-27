function User(name) {
    this.name = name;
}

User.prototype.sayHi = function () {
    return "Hi, my name is " + this.name;
}

const u1 = new User("Haris");
u1.sayHi();


/* 
  

*/