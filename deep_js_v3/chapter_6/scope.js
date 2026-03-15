var teacher = "Kyle";

function otherClass() {
    var teacher = "Suzy"; // Target position, because it will update binding in this Environment Record at runtime from undefined to Suzy
    console.log("Welcome");
};

function ask() {
    var question = "Why?";
    console.log(question); // Source position, because we are taking the value from our Environment Record 
};

otherClass(); 
ask(); 


/* 
    We have 2 phases - creation phase & execution phase
    Creation Phase is in Compile time, while Execution is in runtime
    First, we have our global scope which hasits own Creation Phase
    - It creates Global Lexical Environment -> Environment Record -> it registers identificator declarations (hoisting), and sets outer reference to null 
    - In its environment record, it has teacher -> undefined , otherClass -> function object, ask -> function object
    Then it comes to Execution Phase, where binding for identifiers are updated, and then teacher -> "Kyle"

    After that it comes to function invocation - otherClass()
    - It invokes a new Creation Phase 
    - New lexical environment, which also has environment record & reference to outer lexical environment (in this case global)
    - In Environment Record, it binds identifier declarations, and in this case we have `var`, which means at compile time
      its going to be teacher -> undefined
    - In execution phase, teacher -> Suzy
    - In global scope, we cannot access it, but in otherClass scope, we can access outer scope (teacher => Kyle)

    We also have shadowing definition - it means that identificator from inner scope hides (shadows) the identificator of the same name in the outer scope 
*/

