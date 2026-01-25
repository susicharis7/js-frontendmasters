// CHALLENGE 1
function createFunction() {
	return function() {
    console.log("hello");
  }
}

// /*** Uncomment these to check your work! ***/
const function1 = createFunction();
function1(); // => should console.log('hello');
console.log("-----------------");

// CHALLENGE 2
function createFunctionPrinter(input) {
	return function() {
    console.log(input);
  }
}

// /*** Uncomment these to check your work! ***/
const printSample = createFunctionPrinter('sample');
printSample(); // => should console.log('sample');
const printHello = createFunctionPrinter('hello');
printHello(); // => should console.log('hello');
console.log("-----------------");

// CHALLENGE 3
function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter () {
    counter ++;
    console.log('counter', counter);
  }
  return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// /*** Uncomment these to check your work! ***/
willCounter();
willCounter();
willCounter();

jasCounter();
willCounter();


function addByX(x) {
	let step = x;
  
  return function addItPls(num) {
    let result = step + num;
    console.log(result);
    return result;
  }
  
  
}

// /*** Uncomment these to check your work! ***/
const addByTwo = addByX(2);
addByTwo(1); // => should return 3
addByTwo(2); // => should return 4
addByTwo(3); // => should return 5

const addByThree = addByX(3);
addByThree(1); // => should return 4
addByThree(2); // => should return 5

const addByFour = addByX(4);
addByFour(4); // => should return 8
addByFour(5); // => should return 9

console.log("-----------------");
// CHALLENGE 4
function once(func) {
	let hasRun = false;
  let result;
  
  return function(args) {
    if (!hasRun) {
      result = func(args);
      hasRun = true;
    }
    return result;
  }
}

// /*** Uncomment these to check your work! ***/
const onceFunc = once(addByTwo);
console.log(onceFunc(4));  // => should log 6
console.log(onceFunc(10));  // => should log 6
console.log(onceFunc(9001));  // => should log 6

console.log('------------- Challenge 5 ------------')
// CHALLENGE 5
function after(count, func) {
  let counter = 0;
  
  
  return function() {
    counter++;
    
    if(counter === count) {
      func();
    } 
    
 
  }
  
}

// /*** Uncomment these to check your work! ***/
const called = function() { console.log('hello') };
const afterCalled = after(3, called);
afterCalled(); // => nothing is printed
afterCalled(); // => nothing is printed
afterCalled(); // => 'hello' is printed


console.log('------------- Challenge 6 ------------')
// CHALLENGE 6
function delay(func, wait) {
	return function(...args) {
    setTimeout(() => {
      func(...args);
    }, wait)
  }
}

function testSix(msg) {
  console.log(msg);
}

const tryItOut = delay(testSix, 1000);
tryItOut("Hehe SUII");

console.log('------------- Challenge 7 ------------')

// CHALLENGE 7
function rollCall(names) {
	let counter = 0;
  
  return function() {
   
    
    /* Hardcoded 
    if(counter === 1) {
      console.log(names[0]);
    } else if (counter === 2) {
      console.log(names[1]);
    } else if (counter === 3) {
      console.log(names[2]);
    } else {
      console.log("Everyone accounted for");
    }
    */
    
    if (counter < names.length) {
      console.log(names[counter]);
      counter++;
    } else {
      console.log('Everyone Accounted For.');
    }
    
    
  }
  
  
}

// /*** Uncomment these to check your work! ***/
const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
rollCaller() // => should log 'Victoria'
rollCaller() // => should log 'Juan'
rollCaller() // => should log 'Ruth'
rollCaller() // => should log 'Everyone accounted for'

console.log('------------- Challenge 8 ------------')
// CHALLENGE 8
function saveOutput(func, magicWord) {
  let result;
  let objVal = {};
  
  return function(input) {
		if (input !== magicWord) {
    	result = func(input);  
      objVal[input] = result;
      return result;
      
    } else {
      return objVal;
    }
    
    
  }
  
  
}

// /*** Uncomment these to check your work! ***/
const multiplyBy2 = function(num) { return num * 2; };
const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
console.log(multBy2AndLog(2)); // => should log 4
console.log(multBy2AndLog(9)); // => should log 18
console.log(multBy2AndLog('boo')); // => should log { 2: 4, 9: 18 }

console.log('------------- Challenge 9 ------------')
// CHALLENGE 9
function cycleIterator(array) {
  let result;
	let counter = 0; 
  
  return function() {
  	  if(counter < array.length) {
        result = array[counter];
        counter++;
        return result;
      } else if (counter === array.length) {
        counter = 0;
        result = array[counter];
        return result;
      }
    
    
  }
  
}

// /*** Uncomment these to check your work! ***/
const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
const getDay = cycleIterator(threeDayWeekend);
console.log(getDay()); // => should log 'Fri'
console.log(getDay()); // => should log 'Sat'
console.log(getDay()); // => should log 'Sun'
console.log(getDay()); // => should log 'Fri'

console.log('------------- Challenge 10 ------------')
// CHALLENGE 10
function defineFirstArg(func, arg) {
	let result;
  
  return function(...restOfArgs) {
    result = func(arg, ...restOfArgs);
    return result;
  }
  
}

// /*** Uncomment these to check your work! ***/
const subtract = function(big, small) { return big - small; };
const subFrom20 = defineFirstArg(subtract, 20);
console.log(subFrom20(5)); // => should log 15

console.log('------------- Challenge 11 ------------')
// CHALLENGE 11
function dateStamp(func) {
	let result;
  let timestamp = new Date();
  let date = "date", output = "output";
  
  
  return function(...args) {
  	result = func(...args);
    timestamp = Date.now();
    let newObj = {};
    newObj[date] = timestamp;
    newObj[output] = result;
    return newObj;
    
  }
  
}

// /*** Uncomment these to check your work! ***/
const stampedMultBy2 = dateStamp(n => n * 2);
console.log(stampedMultBy2(4)); // => should log { date: (today's date), output: 8 }
console.log(stampedMultBy2(6)); // => should log { date: (today's date), output: 12 }

console.log('------------- Challenge 12 ------------')
// CHALLENGE 12
function censor() {
  const pairs = [];

  return function(...args) {
    // slučaj: učimo novu zamjenu
    if (args.length === 2) {
      pairs.push(args);
    }

    // slučaj: primjenjujemo sve zamjene
    if (args.length === 1) {
      let currentString = args[0];

      for (let i = 0; i < pairs.length; i++) {
        const find = pairs[i][0];
        const replaceWith = pairs[i][1];

        // globalna zamjena svih pojavljivanja
        const regex = new RegExp(find, 'g');
        currentString = currentString.replace(regex, replaceWith);
      }

      return currentString;
    }
  };
}


// /*** Uncomment these to check your work! ***/
const changeScene = censor();
changeScene('dogs', 'cats');
changeScene('quick', 'slow');
console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); 
// => should log 'The slow, brown fox jumps over the lazy cats.'

console.log('------------- Challenge 13 ------------')
// CHALLENGE 13
function createSecretHolder(secret) {
	let pObj = {};
  
  function getSecret() {
    return secret;
  }
  
  function setSecret(newSecret) {
    secret = newSecret;
  }
  
  pObj.getSecret = getSecret;
  pObj.setSecret = setSecret;
  
  
  
  return pObj;
  
}

// /*** Uncomment these to check your work! ***/
let obj = createSecretHolder(5)
console.log(obj.getSecret()) // => returns 5
obj.setSecret(2)
console.log(obj.getSecret()) // => returns 2

console.log('------------- Challenge 14 ------------')
// CHALLENGE 14
function callTimes() {
	let callCounter = 0;
  
  
  return function() {
    callCounter++;
    console.log(callCounter);
    return callCounter;
  }
}

// /*** Uncomment these to check your work! ***/
let myNewFunc1 = callTimes();
let myNewFunc2 = callTimes();
myNewFunc1(); // => 1
myNewFunc1(); // => 2
myNewFunc2(); // => 1
myNewFunc2(); // => 2

console.log('------------- Challenge 15 ------------')
// CHALLENGE 15
function roulette(num) {
	let counter = 1;
  let text = 'spin';
  let win = 'win';
  let pickAgain = 'pick a number to play again';
  
  return function() {
      
    	if (counter < num) {
        counter++;
   			return text;
      } else if (counter === num) {
        counter++;
        return win;
      }  else {
        return pickAgain;
      }
    
   
  }
  
}

// /*** Uncomment these to check your work! ***/
const play = roulette(3);
console.log(play()); // => should log 'spin'
console.log(play()); // => should log 'spin'
console.log(play()); // => should log 'win'
console.log(play()); // => should log 'pick a number to play again'
console.log(play()); // => should log 'pick a number to play again'

console.log('------------- Challenge 16 ------------')

// CHALLENGE 16
function average() {
	let sum = 0;
  let count = 0;
  
  
  return function(n) {
    	if (arguments.length > 0) {
        sum += n;
        count++; 
        return sum / count;
      } else {
        if (count === 0) {return 0;}
        return sum/count;
      }
    

  }
  
}

// /*** Uncomment these to check your work! ***/
const avgSoFar = average();
console.log(avgSoFar()); // => should log 0
console.log(avgSoFar(4)); // => should log 4
console.log(avgSoFar(8)); // => should log 6
console.log(avgSoFar()); // => should log 6
console.log(avgSoFar(12)); // => should log 8
console.log(avgSoFar()); // => should log 8

console.log('------------- Challenge 17 ------------')
// CHALLENGE 17
function makeFuncTester(arrOfTests) {
  let firstElement;
  let secondElement;
  let cbRes;
  
  
  return function(callback) {
    for (let i = 0; i < arrOfTests.length; i++) {
      firstElement = arrOfTests[i][0];
      secondElement = arrOfTests[i][1];
      
      cbRes = callback(firstElement);
      
      if (cbRes !== secondElement) {
        return false;
      } 
    }
    return true;
  }
  
}

// /*** Uncomment these to check your work! ***/
const capLastTestCases = [];
capLastTestCases.push(['hello', 'hellO']);
capLastTestCases.push(['goodbye', 'goodbyE']);
capLastTestCases.push(['howdy', 'howdY']);
const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
const capLastAttempt1 = str => str.toUpperCase();
const capLastAttempt2 = str => str.slice(0, -1) + str.slice(-1).toUpperCase();
console.log(shouldCapitalizeLast(capLastAttempt1)); // => should log false
console.log(shouldCapitalizeLast(capLastAttempt2)); // => should log true


console.log('------------- Challenge 18 ------------')
// CHALLENGE 18
function makeHistory(limit) {
  let historyTracker = [];
  let lastElement;
	
  return function(text) {
  	  if (text !== 'undo') {
        historyTracker.push(text);
        
        if (historyTracker.length > limit) {
        	historyTracker.shift();  
        }
        
        
        return text + ' done';
      }  else if (text === 'undo') {
        if (historyTracker.length > 0) {
          lastElement = historyTracker.pop();
          return lastElement + ' undone';
        } else {
        return 'nothing to undo';
      }
      } 
  }
  
}

// /*** Uncomment these to check your work! ***/
const myActions = makeHistory(2);
console.log(myActions('jump')); // => should log 'jump done'
console.log(myActions('undo')); // => should log 'jump undone'
console.log(myActions('walk')); // => should log 'walk done'
console.log(myActions('code')); // => should log 'code done'
console.log(myActions('pose')); // => should log 'pose done'
console.log(myActions('undo')); // => should log 'pose undone'
console.log(myActions('undo')); // => should log 'code undone'
console.log(myActions('undo')); // => should log 'nothing to undo'


console.log('------------- Challenge 19 ------------')
// CHALLENGE 19
function blackjack(array) {
  let deckIndex = 0; // BONUS: shared index for all players

  return function dealer(n1, n2) {
    let sum = n1 + n2;
    let callCount = 0;
    let busted = false;

    return function player() {
      // ako je već bust
      if (busted) {
        return 'you are done!';
      }

      callCount++;

      // PRVI POZIV
      if (callCount === 1) {
        return sum;
      }

      // SVAKI SLJEDEĆI POZIV
      sum += array[deckIndex];
      deckIndex++;

      if (sum > 21) {
        busted = true;
        return 'bust';
      }

      return sum;
    };
  };
}

/*** TESTS ***/

// /*** DEALER ***/
const deal = blackjack([2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11]);

/*** PLAYER 1 ***/
const i_like_to_live_dangerously = deal(4, 5);
console.log(i_like_to_live_dangerously()); // 9
console.log(i_like_to_live_dangerously()); // 11
console.log(i_like_to_live_dangerously()); // 17
console.log(i_like_to_live_dangerously()); // 18
console.log(i_like_to_live_dangerously()); // 'bust'
console.log(i_like_to_live_dangerously()); // 'you are done!'
console.log(i_like_to_live_dangerously()); // 'you are done!'

/*** PLAYER 2 (BONUS) ***/
const i_TOO_like_to_live_dangerously = deal(2, 2);
console.log(i_TOO_like_to_live_dangerously()); // 4
console.log(i_TOO_like_to_live_dangerously()); // 15
console.log(i_TOO_like_to_live_dangerously()); // 19
console.log(i_TOO_like_to_live_dangerously()); // 'bust'
console.log(i_TOO_like_to_live_dangerously()); // 'you are done!'

/*** PLAYER 3 (BONUS) ***/
const i_ALSO_like_to_live_dangerously = deal(3, 7);
console.log(i_ALSO_like_to_live_dangerously()); // 10
console.log(i_ALSO_like_to_live_dangerously()); // 13
console.log(i_ALSO_like_to_live_dangerously()); // 'bust'
console.log(i_ALSO_like_to_live_dangerously()); // 'you are done!'
