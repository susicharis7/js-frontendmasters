const Controller = {
    name: "MyController",
    initNormal() {
        const btn = document.getElementById("btn");

        btn.addEventListener("click", function(e) {
            console.log("NORMAL function: ");
            console.log("this: ", this);
            console.log("this.name: ", this.name);
            e.stopPropagation();
        });
    },

    initArrow() {
        const btn = document.getElementById("btn");
        btn.addEventListener("click", (e) => {
            console.log("ARROW function:");
            console.log("this:", this);
            console.log("this.name:", this.name);
            e.stopPropagation(e);
        });
    }
};

Controller.initNormal();
Controller.initArrow();

/*
 I've noticed that on the click for the button with id `btn`, the `parent div` is also triggered
 I've learnt that when we click on the button with id `btn`, it moves up the DOM tree
 Since both parent (div#parent) and child (button#btn) have the same event type, it will also trigger
 the parent element
 If we put for example mouseover for the div#parent, then it will not happen
 But if we need both to be "click" event type, we can use : .stopPropagation();

 Also,
 In the context of JavaScript method definitions, what happens when we use an arrow function inside an object :
 The `this` context automatically becomes permanently bound to the original context.
*/