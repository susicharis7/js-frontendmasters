// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');


// Challenge 1
function addTwo(num) {
	return num + 2;
}

// To check if you've completed it, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));


// Challenge 2
function addS(word) {
	return word + "s";
}

// uncomment these to check your work
// console.log(addS('pizza'));
// console.log(addS('bagel'));


// Challenge 3
function map(array, callback) {
	const outputArray = [];
  for (let i = 0; i < array.length; i++) {
    outputArray.push(callback(array[i]));
  }
  return outputArray;
}

// console.log(map([1, 2, 3], addTwo));


// Challenge 4
function forEach(array, callback) {
	for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}

let alphabet = '';
const letters = ['a','b','c','d'];
forEach(letters, function(char) {
  alphabet += char;
});
console.log(alphabet);

// see for yourself if your forEach works!


// Challenge 5
function mapWith(array, callback) {
  const outputArray = [];

  forEach(array, function(element) {
    outputArray.push(callback(element));
  });

  return outputArray;
}

console.log(mapWith([1,2,3],addTwo));


// Challenge 6
function reduce(array, callback, initialValue) {
	let accumulator = initialValue;
  
  for(let i = 0; i < array.length; i++) {
    accumulator = callback(accumulator, array[i]);
  }
  
  return accumulator;
}

const nums = [4,1,3];
const add = function(a,b) { return a + b };
console.log(reduce(nums, add, 0));


// Challenge 7
function intersection(arrays) {
  
	let acc = arrays[0]; // [5,10,15,20]
  let newArray = [];
  
  for(let i = 1; i < arrays.length; i++) {
    
    newArray = [];
    
  	for (let j = 0; j < acc.length; j++) {
      if (arrays[i].includes(acc[j])) {
        newArray.push(acc[j]);
      }
    } 
    
    acc = newArray;
  }
  
  return acc;

}

// secondWay Challenge 7 with reduce()
function intersectionWithReduce(arrays) {
  return arrays.reduce((acc, curr) => {
    return acc.filter(el => curr.includes(el));
  });
}

console.log(intersection([[5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]]));
// should log: [5, 15]

console.log(intersectionWithReduce([
  [5,10,15,20],
  [15,88,1,5,7],
  [1,10,15,5,20]
]));


// Challenge 8
function union(arrays) {
	let result = [];
  
  for(let i = 0; i < arrays.length; i++) {
  	for(let j = 0; j < arrays[i].length; j++) {
       if(!result.includes(arrays[i][j])) {
         	result.push(arrays[i][j]);
       }
    }  
  }
  
  return result;
  
  
}

// secondWay Challenge 8 with reduce()
function unionWithReduce(arrays) {
  return arrays.reduce((acc, curr) => {
    curr.forEach(el => { 
    	if(!acc.includes(el)) {
        acc.push(el);
      }
    });
    return acc; 
  }, []);
}



console.log(union([[5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]]));
// should log: [5, 10, 15, 88, 1, 7, 100]

console.log(unionWithReduce([[5,10,15], [15,88,1,5,7], [100,15,10,1,5]]));

// Challenge 9
function objOfMatches(array1, array2, callback) {
  	let object = {};
  
		for(let i = 0; i < array1.length; i++) {
      let newValue = callback(array1[i]);
      
      if (newValue === array2[i]) {
        object[array1[i]] = array2[i];
      }
    }
  
  return object;
}

console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }


// Challenge 10
function multiMap(arrVals, arrCallbacks) {
	let object = {};
  
  for (let i = 0; i < arrVals.length; i++) {
		object[arrVals[i]] = [];
    
    for (let j = 0; j < arrCallbacks.length; j++) {
  		object[arrVals[i]].push(arrCallbacks[j](arrVals[i]));    
    }
  }
  
  return object;
  
}

console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }


// Challenge 11
function objectFilter(obj, callback) {
	let newObj = {};
  
  for(let key in obj) {
    // obj[key] - we get value from our keys 
  		if (callback(key) === obj[key]) {
        newObj[key] = obj[key];
      }
  }
  
  return newObj;
  
}

function objectFilterSecond(obj, callback) {
  let newObj = {};
  
  const keys = Object.keys(obj); // ['London', 'LA', 'Paris']
  for (let i = 0; i < keys.length; i++) {
    if (callback(keys[i]) === obj[keys[i]]) {
      newObj[keys[i]] = obj[keys[i]];
    }
  }
  return newObj;
}

const cities = {
London: 'LONDON',
LA: 'Los Angeles',
Paris: 'PARIS',
};
console.log(objectFilter(cities, city => city.toUpperCase())) // Should log { London: 'LONDON', Paris: 'PARIS'}


// Challenge 12
function majority(array, callback) {
  let trueCounter = 0;
  let falseCounter = 0;
  
	for(let i = 0; i < array.length; i++) {
  	let result = callback(array[i]);
    
    
    
    if (result === true) {
      trueCounter++;
    } else {
      falseCounter++;
    }
    
  }
  
  return trueCounter > falseCounter ? true : false;
  
}

// /*** Uncomment these to check your work! ***/
// const isOdd = function(num) { return num % 2 === 1; };
console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
console.log(majority([2, 3, 4, 5], isOdd)); // should log: false


// Challenge 13
function prioritize(array, callback) {
  	let newArr = [];
  	
		for(let i = 0; i < array.length; i++) {
    	if (callback(array[i]) === true) {
        newArr.push(array[i]);
      } 
    }
		
  	for(let i = 0; i < array.length; i++) {
      if (callback(array[i]) === false) {
        newArr.push(array[i]);
      }
    }
  
  return newArr;
}

// Advanced Way Challenge 13
function prioritizeSecond(array, callback) {
  let trueArr = [];
  let falseArr = [];
  
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i]) === true) {
      trueArr.push(array[i]);
    } else {
      falseArr.push(array[i]);
    }
  }
  
  return trueArr.concat(falseArr);
  
}

// /*** Uncomment these to check your work! ***/
const startsWithS = function(str) { return str[0] === 's' || str[0] === 'S'; };
console.log(prioritize(['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends'], startsWithS)); 
// should log:['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']

console.log(prioritizeSecond(['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends'], startsWithS));

// Challenge 14
function countBy(array, callback) {
	let obj = {};
  
  for(let i = 0; i < array.length; i++) {
  	let value = callback(array[i]);
    if (obj[value] === undefined) {
      obj[value] = 1;
    }  else {
      obj[value] += 1;
    }
    
  }
  
  return obj;
  
}


// /*** Uncomment these to check your work! ***/
console.log(countBy([1, 2, 3, 4, 5], function(num) {
if (num % 2 === 0) return 'even';
else return 'odd';
})); // should log: { odd: 3, even: 2 }


// Challenge 15
function groupBy(array, callback) {
	let obj = {};
  
  for(let i = 0; i < array.length; i++) {
    let value = callback(array[i]);
    
    if(obj[value] === undefined) {
    	obj[value] = [array[i]]; // it cannot be (array[i]) because we cannot have value, we need ARRAY to be able to PUSH
    } else {
    obj[value].push(array[i]);
       }
  }
  return obj;
}

// /*** Uncomment these to check your work! ***/
const decimals = [1.3, 2.1, 2.4];
const floored = function(num) { return Math.floor(num); };
console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }


// Challenge 16
function goodKeys(obj, callback) {
	let result = [];
  
  for (let key in obj) {
  	let value = callback(obj[key]);  
    
    if (value === true) {
      result.push(key);
    } 
  }
  
  return result;
}

// /*** Uncomment these to check your work! ***/
const sunny = { mac: 'priest', dennis: 'calculating', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
const startsWithBird = function(str) { return str.slice(0, 4).toLowerCase() === 'bird'; };
console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']


// Challenge 17
function commutative(func1, func2, value) {
	let resultA = func2(func1(value));
  let resultB = func1(func2(value));
  
  /*
  if (resultA === resultB) {
    return true;
  } else {
    return false;
  } 
  */
  
  return resultA === resultB ? true : false;
}

// /*** Uncomment these to check your work! ***/
const multBy3 = n => n * 3;
const divBy4 = n => n / 4;
const subtract5 = n => n - 5;
console.log(commutative(multBy3, divBy4, 11)); // should log: true
console.log(commutative(multBy3, subtract5, 10)); // should log: false
console.log(commutative(divBy4, subtract5, 48)); // should log: false


// Challenge 18
function objFilter(obj, callback) {
	let newObj = {};
  
  for(let key in obj) {
  	let result = callback(key);
    
    if(result === obj[key]) {
      newObj[key] = obj[key];
    }
  }
  
  return newObj;
  
}

// /*** Uncomment these to check your work! ***/
const startingObj = {};
startingObj[6] = 3;
startingObj[2] = 1;
startingObj[12] = 4;
const half = n => n / 2;
console.log(objFilter(startingObj, half)); // should log: { 2: 1, 6: 3 }


// Challenge 19
function rating(arrOfFuncs, value) {
  let trueValues = 0;

  
	for(let i = 0; i < arrOfFuncs.length; i++) {
    let result = arrOfFuncs[i](value);
    
    if(result === true) {
      trueValues++;
    }
    
  }
  
  let percentage = (trueValues / arrOfFuncs.length) * 100;
  return percentage;
  
  
}

// /*** Uncomment these to check your work! ***/
const isEven = n => n % 2 === 0;
const greaterThanFour = n => n > 4;
const isSquare = n => Math.sqrt(n) % 1 === 0;
const hasSix = n => n.toString().includes('6');
const checks = [isEven, greaterThanFour, isSquare, hasSix];
console.log(rating(checks, 64)); // should log: 100
console.log(rating(checks, 66)); // should log: 75


// Challenge 20
function pipe(arrOfFuncs, value) {
	let result = value;
  for(let i = 0; i < arrOfFuncs.length; i++) {
  	 result = arrOfFuncs[i](result);  
  }
  
  return result;
  
}

// /*** Uncomment these to check your work! ***/
const capitalize = str => str.toUpperCase();
const addLowerCase = str => str + str.toLowerCase();
const repeat = str => str + str;
const capAddlowRepeat = [capitalize, addLowerCase, repeat];
console.log(pipe(capAddlowRepeat, 'cat'));


// Challenge 21
function highestFunc(objOfFuncs, subject) {
  let maxValue = -Infinity;
  let bestKey = '';
  
	for (let key in objOfFuncs) {
    let result = objOfFuncs[key](subject);
    
    if (result > maxValue) {
      maxValue = result;
      bestKey = key;
    }
    
  }
  
  return bestKey;
}

// /*** Uncomment these to check your work! ***/
const groupOfFuncs = {};
groupOfFuncs.double = n => n * 2;
groupOfFuncs.addTen = n => n + 10;
groupOfFuncs.inverse = n => n * -1;
console.log(highestFunc(groupOfFuncs, 5)); // should log: 'addTen'
console.log(highestFunc(groupOfFuncs, 11)); // should log: 'double'
console.log(highestFunc(groupOfFuncs, -20)); // should log: 'inverse'


// Challenge 22
function combineOperations(startVal, arrOfFuncs) {
  let result = startVal;
	for (let i = 0; i < arrOfFuncs.length; i++) {
    	 result = arrOfFuncs[i](result);
  }
  
  return result;
}

function add100(num) {
  return num + 100;
}

function divByFive(num) {
  return num / 5;
}

function multiplyByThree(num) {
  return num * 3;
}

function multiplyFive(num) {
  return num * 5;
}

function addTen(num) {
  return num + 10;
}

// /*** Uncomment these to check your work! ***/
console.log(combineOperations(0, [add100, divByFive, multiplyByThree])); // Should output 60 -->
console.log(combineOperations(0, [divByFive, multiplyFive, addTen])); // Should output 10


// Challenge 23
function myFunc(array, callback) {
	for (let i = 0; i < array.length; i++) {
  
  	if (callback(array[i]) === true) {
      return i;
    }
  }
  
  return -1;
  

}

const numbers = [2, 3, 6, 64, 10, 8, 12];
const evens = [2, 4, 6, 8, 10, 12, 64];

function isOdd(num) {
  return (num % 2 !== 0);
}

/*** Uncomment these to check your work! ***/
console.log(myFunc(numbers, isOdd)); // Output should be 1
console.log(myFunc(evens, isOdd)); // Output should be -1


// Challenge 24
function myForEach(array, callback) {
  let result = '';
	for (let i = 0; i < array.length; i++) {
  	result =	callback(array[i]);
  }
  
  return result;
  
}

let sum = 0;

function addToSum(num) {
  sum += num;
}

// /*** Uncomment these to check your work! ***/
const numsSecond = [1, 2, 3];
myForEach(numsSecond, addToSum);
console.log(sum); // Should output 6
