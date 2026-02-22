self.onmessage = (event) => {
  let sum = 0;
  for (let i = 0; i < event.data; i++) {
    sum += i;
  }
  self.postMessage(sum); // through postMessage, worker communicates with main thread
};
