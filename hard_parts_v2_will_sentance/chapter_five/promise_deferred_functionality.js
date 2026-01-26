function display(data) {
    console.log(data);
}

function printHello() {
    console.log("Hello");
}

function blockFor300ms() {
    /* blocks JS thread for 300ms */
}

setTimeout(printHello, 0);

const futureData = fetch('https://twitter.com/will/tweets/1');
futureData.then(display);

blockFor300ms();
console.log("Me first");




/*
    First, we register functions display,printHello,blockFor300ms to the global context memory
    Then, we hit setTimeout, creates a "quick" excecution context and is placed in the stack, but once it goes to the web browser, 
     it exits the stack
    In the web browser, it sets the timer to 0ms, and the function to execute

    The state of the Timer inside a web browser looks something like this :

    Timer {
     callback: printHello,
     delay: 0,
     ready: false
    }

    When the timer is done, it puts the function `printHello` in the queue (callback/macrotask queue)
    When the stack is empty, event loop sees it and puts the function in the stack from the queue
    But important ! - it is a macrotask queue, so if we have something like fetch, it is a microtask queue, it has higher priority

    Even though it is 0ms, JS Engine will still continue executing, and it goes to the fetch
    Which means printHello is still in the MACROTASK QUEUE
    Then we declare futureData in the global context memory

    Then, `fetch` is called and a short execution context is created and placed on the stack
    Inside that execution context, JS Engine tells the web browser:
    "Here, take this HTTP request and handle it"

    The web browser immediately takes over the HTTP request
    `fetch` immediately RETURNS a Promise
    This Promise represents a future value

    At this moment, the Promise looks like (mental model):

    Promise #1 {
      state: "pending",
      result: undefined,
      onFulfilledCallbacks: [],
      onRejectedCallbacks: []
    }

    The fetch execution context exits the stack
    JS Engine continues executing synchronously

    Next, we hit:
    futureData.then(display)

    `.then` is called SYNCHRONOUSLY on the SAME Promise (futureData)
    `.then` does NOT execute `display`
    `.then` only REGISTERS the function

    So `display` is pushed into the Promise's onFulfilledCallbacks array

    Promise now looks like:

    Promise {
      state: "pending",
      result: undefined,
      onFulfilledCallbacks: [ display ],
      onRejectedCallbacks: []
    }

    `.then` also CREATES and RETURNS a NEW Promise (Promise #2),
    which will later hold the value returned from `display`


    But, since we also get Promise #2 because of .then, JS will continue executing, and it will hit the blockFor300ms function
    This function blocks the call stack for 300ms , but not because promise is waiting, but because it is synchronized 
    But in the meantime, display will go into the microtask queue and only when the stack gets empty, it will be executed,
     and the event loop is the one that is going to see that stack is empty and it will transfer from microtask queue to the stack, after
     the blocking function and console log
    
     Also we cant forget - display runs before printHello because printHello is in a MACROTASK QUEUE !!!!

    
*/