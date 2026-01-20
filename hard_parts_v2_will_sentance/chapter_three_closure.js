function once(fn) { // samo se jednom izvrsava
    let hasRun = false; // moramo zapamtiti da li je bila pozvana 
    let result;

    return function (...args) { // ovo sad postaje vrijednost od initApp 
        if (!hasRun) {
            result = fn(...args);
            hasRun = true;
        }
        return result;
    }
}


const initApp = once(() => {
    console.log("Init");
    return 42;
});

initApp();
initApp();



function memoize(fn) {
    const cache = {};

    return function(...args) {
        const key = JSON.stringify(args);

        if (cache[key] !== undefined) {
            return cache[key];
        }

        const result = fn(...args);
        cache[key] = result;
        return result;

    }
}


const slowSquare = (n) => {
    console.log("Computing...");
    return n * n;
};

// fastSquare - wrapper function (closes the closure)
const fastSquare = memoize(slowSquare);

fastSquare(5);
fastSquare(5);

fastSquare(6);
fastSquare(6);



function createFunction() {
    function multiplyBy2(num) {
        return num * 2;
    }

    return multiplyBy2;
}

const generatedFunc = createFunction();
const result = generatedFunc(3);
// createFunction is not invoked at generatedFunc(3) call, only multiplyBy2 



function outer() {
    let counter = 0;

    return function incrementCounter() {
        counter++;
        return counter; 
    }
    incrementCounter();
}

outer();


function secondOuter() {
    let counter = 0;
    
    function incrementCounter() {
      return counter++;
    }

    return incrementCounter;
}


const myNewFun = secondOuter();
myNewFun();
myNewFun();



/* Important */
function secondOuter() {
  let counter = 0;

  return function incrementCounter() {
    counter++;
  };
}

const inc = secondOuter();

// ovdje je counter i dalje sacuvan jer incrementCounter ima referencu na njega
// kad returnamo u `inc`, on ce sa sobom povuci i counter a ne samo funkciju




