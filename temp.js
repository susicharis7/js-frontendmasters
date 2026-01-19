function reduce(array, callback, initialValue) {
	let accumulator = initialValue;
  
  for(let i = 0; i < array.length; i++) {
    accumulator = callback(accumulator, array[i]);
  }
  
  return accumulator;
}

function unionWithReduce(arrays) {
  return arrays.reduce((accumulator, currentElement) => {
    currentElement.forEach(el => { 
    	if(!accumulator.includes(el)) {
        accumulator.push(el);
      }
    });
    return accumulator; 
  }, []);
}

console.log(unionWithReduce([[5,10,15], [15,88,1,5,7], [100,15,10,1,5]]));

