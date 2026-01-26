function display(data) {
    console.log(data);
}

function printHello() {
    console.log("Hello");
}

function printError() {
    console.log("Error");
}

function blockFor300ms() {
    /* blocks JS thread for 300ms */
}

setTimeout(printHello, 0);

const futureData = fetch('https://twitter.com/will/tweets/1');
futureData.then(display);

/* Any function we pass here - it goes to the onRejectionCallbacks property of Promise */
futureData.catch(printError);
/* The other way is to pass to then() as the second argument */
futureData.then(display, printError);


blockFor300ms();
console.log("Me first");
