/* Third (last) Video */

/* 
In the console, on our quiz add event listeners to:
- Capitalize the text of the "true" button when it is clicked
- Change the h1 text to "hovering" when the mouse moves into the element
- Change the h1 text to "Quiz.js" when the mouse moves out of the element 

file:///C:/Users/Haris/Desktop/frontendmasters/chapter_8/Quiz.html

*/

// First 
let button = document.querySelectorAll("button")[0];
button.addEventListener('click', (event) => {
    event.target.textContent = event.target.textContent.toUpperCase();
});


// Second 
let h1hovering = document.getElementsByTagName("h1")[0];

h1hovering.addEventListener("mouseover", (event) => {
    event.target.textContent = "Hovering";
});

// Third 
h1hovering.addEventListener("mouseout", (event) => {
    event.target.textContent = "Quiz.js";
});

// or 
h1hovering.addEventListener("mouseout", function () {
  this.textContent = "Quiz.js";
});



