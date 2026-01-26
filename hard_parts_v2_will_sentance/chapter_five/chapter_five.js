function display(data) {
    console.log(data)
}

function logLength(data) {
    console.log("Length: " + data.length);
}

function saveToCache(data) {
    console.log("Saved to cache");
}

const futureData = fetch('https://twitter.com/will/tweets/1'); /* Two Prompt Facade Function */


futureData.then(display); 
futureData.then(logLength);
futureData.then(saveToCache);

/* This is how Promise looks internally */

/*
Promise {
  state: "pending",
  result: undefined,
  onFulfilledCallbacks: [
    display,
    logLength,
    saveToCache
  ]
}
*/

console.log("Me First");

/* fetch() can also do other HTTP Requests, it can take 2 arguments */
fetch("https://api.example.com/users", {
    method: "POST", // I want to send data 
    headers: {
        "Content-Type": "application/json" // This is what I'm sending
    },
    body: JSON.stringify({ // I'm sending this 
        name: "Haris",
        age: 25
    })
}).then(response => response.json())
  .then(data => console.log(data));

  







