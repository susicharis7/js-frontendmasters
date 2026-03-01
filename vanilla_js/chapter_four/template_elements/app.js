const template = document.getElementById("card-template");
const clone = template.content.cloneNode(true);

clone.querySelector(".title").textContent = "Title";
clone.querySelector(".description").textContent = "Description";

document.body.appendChild(clone);

// We clone a template in the connected callback method by 
// using getElementById or querySelector to select the template, 
// then calling content.cloneNode() and appending the cloned content, not the template itself.

