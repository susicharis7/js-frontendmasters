const worker = new Worker("web-worker.js");

worker.onmessage = (event) => {
    console.log("Worker result: ", event.data);
};

document.getElementById("btn").addEventListener("click", () => {
    console.log("Button clicked");
});

console.log("Sending the job to worker");
worker.postMessage(5000000000);
console.log("Main thread continues...");