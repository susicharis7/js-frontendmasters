/* HTMLCollections don't have all the modern Array interface, such as filter, map, reduce */
// note : querySelectorAll() has those methods

// Solution ? Turn it into array
// For example
const items = document.getElementsByClassName("item");
const arr = Array.from(items);

arr.map(el => el.textContent); 
