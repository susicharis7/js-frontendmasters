x = 10;

/* 
 Other than Environment Record, we also have Reference Record
 It is created when JS Engine processes & calculates some part of code in execution phase 
 We can use the same example
 Engine cannot immediately write 10 to identificator x 
 It needs to know where it stands in memory 

 1. Engine evaluates left side : x
 2. During that evaluation, it creates Reference record
    Reference record has :
        base - reference on where is the binding, in which Env. record / object,
        referenced name - name of the identificator
        strict flag - is it in strict mode / not
 3. so for our case :
        base - env record of x = 10 
        referenced name - x
        strict - false 

    now engine evaluates right side of the assignment expression
    then it does an operation : PutValue(reference, 10)
    which means write 10 in slot for `x`
    
*/

console.log(x);

/*
    Another example
    Engine again evaluates x 
    Creates reference record
    base -> env record
    name -> 'x'
    But here, GetValue(reference)
    and gives us back the value 10
*/

