function show() {
    console.log(this);
};

show();

/*
  .this in default function 

 In browser, this -> window (non-strict mode)
*/


const Router = {
    name: "MyRouter",
    init: function() {
        console.log(this.name);
    }
};

Router.init();
/*
  .this in object method

Here, this -> Router object 
Because left side of the `.` (dot) becomes `this`

*/


const fn = Router.init();
fn();

// Now, this -> NOT the Router
// this -> window (correct), or undefined in strict mode

const boundFn = Router.init.bind(Router);
boundFn();

// this -> will always be Router



link.addEventListener("click", function () {
    console.log(this);
});
// this -> element on which the listener is bounded

// but

link.addEventListener("click", () => {
    console.log(this);
});

// here , this -> window, because arrow functions don't have their own `this`, so it takes it from the outer scope


