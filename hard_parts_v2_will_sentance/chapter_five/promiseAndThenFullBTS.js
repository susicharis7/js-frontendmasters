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


/*

CODE:
fetch(url)
  .then(response => response.json())
  .then(logUser);

==================================================
STEP 1 — fetch(url)
==================================================

JS Engine executes `fetch` as a normal function.
A short execution context is pushed onto the call stack.

Inside that execution context:
- JS Engine tells the Web Browser (Web API):
  "Start this HTTP request and notify me when it's done"
- JS Engine IMMEDIATELY returns a Promise (P1)

STATE AFTER fetch():

P1 = {
  state: "pending",
  result: undefined,
  onFulfilledCallbacks: [],
  onRejectedCallbacks: []
}

==================================================
STEP 2 — FIRST .then(response => response.json())
==================================================

This `.then` runs SYNCHRONOUSLY.

What it does:
- registers its callback on P1
- pushes `response => response.json()` into P1.onFulfilledCallbacks
- CREATES and RETURNS a NEW Promise → P2

STATE AFTER first .then():

P1 = {
  state: "pending",
  result: undefined,
  onFulfilledCallbacks: [ response => response.json() ],
  onRejectedCallbacks: []
}

P2 = {
  state: "pending",
  result: undefined,
  onFulfilledCallbacks: [],
  onRejectedCallbacks: []
}

==================================================
STEP 3 — SECOND .then(logUser)
==================================================

This `.then` is called on P2 (NOT on P1).

What it does:
- registers `logUser` on P2
- pushes `logUser` into P2.onFulfilledCallbacks
- CREATES and RETURNS a NEW Promise → P3

STATE AFTER second .then():

P1 = {
  state: "pending",
  result: undefined,
  onFulfilledCallbacks: [ response => response.json() ],
  onRejectedCallbacks: []
}

P2 = {
  state: "pending",
  result: undefined,
  onFulfilledCallbacks: [ logUser ],
  onRejectedCallbacks: []
}

P3 = {
  state: "pending",
  result: undefined,
  onFulfilledCallbacks: [],
  onRejectedCallbacks: []
}

==================================================
STEP 4 — HTTP REQUEST FINISHES
==================================================

The Web Browser finishes the HTTP request
and notifies the JS Engine.

P1 is RESOLVED.

STATE UPDATE:

P1 = {
  state: "fulfilled",
  result: Response,
  onFulfilledCallbacks: [ response => response.json() ],
  onRejectedCallbacks: []
}

P1 is now SETTLED.

==================================================
STEP 5 — FIRST CALLBACK EXECUTION
==================================================

JS Engine:
- takes `response => response.json()` from P1.onFulfilledCallbacks
- schedules it in the MICROTASK QUEUE

When the call stack is empty:
- Event Loop moves it to the call stack
- callback is invoked with `Response`

Effectively:
(response => response.json())(Response)

==================================================
STEP 6 — response.json()
==================================================

Inside the callback:
response.json() is called.

IMPORTANT:
- response.json() RETURNS A NEW Promise → P_json
- JSON parsing is async

Because a Promise is returned:
- P2 ADOPTS the state of P_json
- P2 stays pending until P_json resolves

STATE NOW:

P1 = {
  state: "fulfilled",
  result: Response,
  onFulfilledCallbacks: []
}

P_json = {
  state: "pending",
  result: undefined
}

P2 = {
  state: "pending",
  result: undefined,
  onFulfilledCallbacks: [ logUser ]
}

P3 = {
  state: "pending",
  result: undefined
}

==================================================
STEP 7 — JSON PARSING FINISHES
==================================================

P_json resolves with parsed data.

STATE UPDATE:

P_json = {
  state: "fulfilled",
  result: parsedUserObject
}

Because P2 was waiting for it:

P2 = {
  state: "fulfilled",
  result: parsedUserObject,
  onFulfilledCallbacks: [ logUser ]
}

==================================================
STEP 8 — SECOND CALLBACK EXECUTION
==================================================

JS Engine:
- takes `logUser` from P2.onFulfilledCallbacks
- schedules it in the MICROTASK QUEUE

When the call stack is empty:
- Event Loop moves it to the call stack
- logUser(parsedUserObject) is invoked

==================================================
END OF PROMISE CHAIN
==================================================

FINAL STATES:

P1 → fulfilled (Response)
P2 → fulfilled (parsedUserObject)
P3 → fulfilled (value returned by logUser, or undefined)

*/
