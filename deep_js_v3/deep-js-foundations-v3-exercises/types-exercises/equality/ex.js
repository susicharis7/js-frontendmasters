// TODO: write `findAll(..)`
function findAll(value, array) {
	// napraviti prazan result 
	let result = [];

	// proci kroz svaki element iz `array`
	// ako element matchuje sa value, ubaciti ga u rezultat
	for (let v of array) {

		if (Object.is(v, value)) {
			result.push(v);
		} else if (value === null && v === undefined || value === undefined && v === null) {
			result.push(v);
		} else if (typeof value == "string" && typeof v == "number" && value.trim() != "" && !Object.is(-0, v)) {
			if (value == v) {
				result.push(v);
			};
		} else if (typeof value == "number" && typeof v == "string" && !Object.is(value, -0) && !Object.is(value, NaN) && !Object.is(value, -Infinity) && !Object.is(value, Infinity) && v.trim() != "") {
			if (value == v) {
				result.push(v);
			};
		}
		


	

		
	};

	




	// na kraju vratiti rezultat 
	return result; 
};

// tests:
var myObj = { a: 2 };

var values = [
	null, undefined, -0, 0, 13, 42, NaN, -Infinity, Infinity,
	"", "0", "42", "42hello", "true", "NaN", true, false, myObj
];

console.log(setsMatch(findAll(-0,values),[-0]) === true);
console.log(setsMatch(findAll(13,values),[13]) === true);
console.log(setsMatch(findAll(NaN,values),[NaN]) === true);
console.log(setsMatch(findAll(-Infinity,values),[-Infinity]) === true);
console.log(setsMatch(findAll(Infinity,values),[Infinity]) === true);
console.log(setsMatch(findAll("",values),[""]) === true);
console.log(setsMatch(findAll("42hello",values),["42hello"]) === true);
console.log(setsMatch(findAll("true",values),["true"]) === true);
console.log(setsMatch(findAll(true,values),[true]) === true);
console.log(setsMatch(findAll(false,values),[false]) === true);
console.log(setsMatch(findAll(myObj,values),[myObj]) === true);
console.log(setsMatch(findAll(null,values),[null,undefined]) === true);
console.log(setsMatch(findAll(undefined,values),[null,undefined]) === true);
console.log(setsMatch(findAll(0,values),[0,"0"]) === true);
console.log(setsMatch(findAll(42,values),[42,"42"]) === true);
console.log(setsMatch(findAll("0",values),[0,"0"]) === true);
console.log(setsMatch(findAll("42",values),[42,"42"]) === true);

console.log(setsMatch(findAll(null,values),[null,0]) === false);
console.log(setsMatch(findAll(undefined,values),[NaN,0]) === false);
console.log(setsMatch(findAll(0,values),[0,-0]) === false);
console.log(setsMatch(findAll(42,values),[42,"42hello"]) === false);
console.log(setsMatch(findAll(25,values),[25]) === false);
console.log(setsMatch(findAll(Infinity,values),[Infinity,-Infinity]) === false);
console.log(setsMatch(findAll("",values),["",0]) === false);
console.log(setsMatch(findAll("false",values),[false]) === false);
console.log(setsMatch(findAll(true,values),[true,"true"]) === false);
console.log(setsMatch(findAll(true,values),[true,1]) === false);
console.log(setsMatch(findAll(false,values),[false,0]) === false);

// ***************************

// Da li 2 arraya imaju iste elemente 
function setsMatch(arr1,arr2) {
	if (Array.isArray(arr1) && Array.isArray(arr2) && arr1.length == arr2.length) {
		for (let v of arr1) {
			if (!arr2.includes(v)) return false;
		}
		return true;
	}
	return false;
}
