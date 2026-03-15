/*
    Target Position means that the reference is the place where the value will be written 
    Because it is a Target Reference => PutValue(reference, value)
*/

x = 10; 
// x is in target position, because it is a place where the value will be written 
// x is a so called - target reference 


/*
    Source Position means that reference shows from where the value needs to be taken 
    Because it is a Source Reference => GetValue(reference)
*/
console.log(x);
// 


function randFun(a) {
    console.log(a);
};

let a = 10;
randFun(a);

/*
    Engine evaluates `a`
    That evaluation gives us the Reference record that references on binding inside Environment record 
    That environment record is in that function, it has lexical environment which has environment record
    That env. record has that binding, and our reference record is referencing on it
    Because `a` is in argument position when invoking the function, engine needs to get the value so that it can
    put it in the parameter
    Because it needs the value => GetValue(reference) => Source Reference
*/

