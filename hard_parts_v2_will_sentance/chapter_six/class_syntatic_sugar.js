class UserCreator {
    constructor (name, score) {
        this.name = name;
        this.score = score;
    }

    increment() {
        this.score++;
    }

    login() {
        console.log("Login");
    }
}

const user1 = new UserCreator('Harke', 7);
user1.increment();

// Nothing is changed under the hood, it is a syntatic sugar - everything is inside a class (still function~object combo)