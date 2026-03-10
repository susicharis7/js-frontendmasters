if ("hello") {
    console.log("Something");
};


/*
Internally, ECMAScript language performs automatic type conversion if needed, 
and we have abstract operations that are implicitly used
One more important thing is semantics, so it doesn't have to tell us every time I have to convert this do this and this,
we have abstract operations, for example here, the one used is `ToBoolean("hello")`, and we have documentation of it
at ECMAScript language specification
*/

