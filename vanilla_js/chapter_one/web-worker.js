self.onmessage = (event) => {
  let sum = 0;
  for (let i = 0; i < event.data; i++) {
    sum += i;
  }
  self.postMessage(sum);
};
