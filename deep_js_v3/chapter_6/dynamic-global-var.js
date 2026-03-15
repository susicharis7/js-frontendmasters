var teacher = "Kyle";

function otherClass() {
    teacher = "Suzy";
    topic = "React";
    console.log("Welcome");
};

otherClass();

// source reference 
teacher; 
topic;

/*
topic is NOT created during compile/creation phase because it has no declaration
(var, let, const)

When execution reaches:

topic = "React"

the engine performs identifier lookup

1. check current lexical environment (otherClass)
   => no binding for topic

2. check outer lexical environment (global)
   => no binding for topic

Since the identifier was not found and the code runs in non-strict mode,
JavaScript creates an implicit global variable

So at runtime the engine creates:

Global Environment Record
topic => "React"

This is called an implicit global (or accidental global)

In strict mode this would throw ReferenceError instead of creating the variable
*/
