function logUser(user) {
  console.log("USER:", user.name);
}

fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(response => response.json()) // Whole arrow function is the callback function 
  .then(logUser);

console.log("Start");



/* 
    JS Engine sees the `fetch`, registers it, and then the fetch is called on the stack, and execution context is created but for short time
    It tells the web browser : here, take this http request and resolve it, and it immediately returns the Promise, which means we will get the value
    once the response is returned, which means it is currently in `pending` state
    When it comes to Promise, it is an object and it has properties: (it is not a real object, but it is like a mental model)
        state, result, onFulfilledCallbacks, onRejectedCallbacks 
    Right now the state is pending, result is undefined, and onFulfilledcallbakcs and onRejectedCallbacks are empty
    Right after the fetch returns Promise, both `.then` are synchronously called 

    The first `.then`, response is the value of the first promise, so when the web browser returns the response, the value is stored in result,
    and immediately sent to response 
    So now, `response` has got the `result` from promise object property that was set to it as an argument
    state : `fulfilled`, result : `Response`
    When the Promise is resolved, .then gets a value and callback function is invoked with that value as an argument
    But it is not Invoked immediately, it first goes to the microtask queue, and it is invoked when call stack is empty, event loop 
     sees that it is empty, it puts it in the call stack and then it is invoked
    BUT Then we have response.json() which ALSO returns a PROMISE, and it is also an async operation
    That means that the next `.then` is also waiting for a Promise resolve 
    While it is waiting, again, state : `pending` , result: `undefined`
    When that promise is resolved, logUser is invoked, and the result value from the promise is being passed as an argument to the logUser
     function
*/