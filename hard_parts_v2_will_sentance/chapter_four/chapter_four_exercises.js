// // Reference : http://csbin.io/async

// /* CHALLENGE 1 */

// function sayHowdy() {
//   console.log('Howdy');
// }

// function testMe() {
//   setTimeout(sayHowdy, 0);
//   console.log('Partnah');
// }
// // After thinking it through, uncomment the following line to check your guess!
// testMe(); // what order should these log out? Howdy or Partnah first?


// /* CHALLENGE 2 */

// function delayedGreet() {
// 	setTimeout(() => {
//     console.log("welcome")
//   }, 3000);
// }
// // Uncomment the following line to check your work!
// delayedGreet(); // should log (after 3 seconds): welcome


// /* CHALLENGE 3 */

// function helloGoodbye() {
//   setTimeout(() => {
//     console.log("good bye");
//   }, 2000);
  
//   console.log("hello");
// }
// // Uncomment the following line to check your work!
// helloGoodbye(); // should log: hello // should also log (after 3 seconds): good bye


// /* CHALLENGE 4 */

// function brokenRecord() {
//   setTimeout(() => {
//     console.log("hi again");
//     brokenRecord();
//   },1000);
// }
// // Uncomment the following line to check your work!
// brokenRecord(); // should log (every second): hi again


// /* CHALLENGE 5 */

// function limitedRepeat() {
//   let countSeconds = 0;
  
//   const intervalId = setInterval(() => {
//     console.log("hi for now");
//     countSeconds++;
    
//     if (countSeconds === 5) {
//     	clearInterval(intervalId);  
//     }
    
//   },1000);
  
  
// }
// // Uncomment the following line to check your work!
// limitedRepeat(); // should log (every second, for 5 seconds): hi for now


// /* CHALLENGE 6 */

// function everyXsecsForYsecs(func, interval, duration) {
//   let elapsedTime = 0;
//   let intervalToMs = interval * 1000;
//   let durationToMs = duration * 1000;
  
//   const intervalId = setInterval(() => {
//     func();
//     elapsedTime += intervalToMs;
    
//     if (elapsedTime >= durationToMs) {
//       clearInterval(intervalId);
//     }
//   }, intervalToMs);
// }

// function everyXsecsForYsecsSecond(func, interval, duration) {
//   let elapsedTime = 0;
  
//   const intervalId = setInterval(() => {
//     func();
//     elapsedTime += interval;
    
//     if (elapsedTime >= duration) {
//       clearInterval(intervalId);
//     }
//   }, interval);
// }
// // Uncomment the following lines to check your work!
// function theEnd() {
//   console.log('This is the end!');
// }
// everyXsecsForYsecs(theEnd, 2, 20); // should invoke theEnd function every 2 seconds, for 20 seconds): This is the end!

// function sayHi() {
//   console.log('Say Hi!');
// }

// console.log("Second: " + everyXsecsForYsecsSecond(sayHi, 1000, 5000));


/* CHALLENGE 7 */

function delayCounter(target, wait) {
	let count = 0;
  
 return function logNext() {
  	if (count >= target) return;
    
    setTimeout(() => {
      count++;
      console.log(count);
      logNext();
    }, wait);
  }
  
}

// UNCOMMENT THESE TO TEST YOUR WORK!
const countLogger = delayCounter(3, 1000)
countLogger();
// After 1 second, log 1
// After 2 seconds, log 2
// After 3 seconds, log 3

/* CHALLENGE 8 */

function promised (val) {
 	return new Promise((resolve, reject) => {
    setTimeout(() => {
      try { // not needed but ok - resolve will never return error
        resolve(val);
      } catch {
        reject(val);
      }
    }, 2000);
  })
}

// UNCOMMENT THESE TO TEST YOUR WORK!
const createPromise = promised('wait for it...');
createPromise.then((val) => console.log(val)); 
// will log "wait for it..." to the console after 2 seconds

/* CHALLENGE 9 */

class SecondClock {

  constructor(cb) {
		this.cb = cb;
    this.counter = 0;
    this.intervalId = null;
  }
  
  start() {
   this.intervalId = setInterval(() => {
      this.counter++;
      
     if (this.counter > 60) {
       this.counter = 1;
     }
     
     this.cb(this.counter);
    }, 1000);
  }
  
  reset() {
    clearInterval(this.interval);
    this.intervalId = null;
    this.counter = 0;
  }
  
}

// UNCOMMENT THESE TO TEST YOUR WORK!
const clock = new SecondClock((val) => { console.log(val) });
console.log("Started Clock.");
clock.start();
setTimeout(() => {
    clock.reset();
    console.log("Stopped Clock after 6 seconds.");
}, 6000);

/* CHALLENGE 10 */

function debounce(callback, interval) {
	
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// function giveHi() { return 'hi'; }
// const giveHiSometimes = debounce(giveHi, 3000);
// console.log(giveHiSometimes()); // -> 'hi'
// setTimeout(function() { console.log(giveHiSometimes()); }, 2000); // -> undefined
// setTimeout(function() { console.log(giveHiSometimes()); }, 4000); // -> undefined
// setTimeout(function() { console.log(giveHiSometimes()); }, 8000); // -> 'hi'

