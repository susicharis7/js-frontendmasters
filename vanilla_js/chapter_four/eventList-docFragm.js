// DocumentFragment is created (no parent, not in DOM tree, doesn't render)
const fragment = document.createDocumentFragment();

// Event Listener on fragment, DocumentFragment extends Node, Node implements EventTarget
// Event Listener will only work if event comes to that node through DOM propagation
fragment.addEventListener("click", () => {
    console.log("Fragment Clicked");
});

// fragment ----> div (still not part of the main document)
const div = document.createElement("div");
div.textContent = "Click me!";
fragment.appendChild(div);

// fragment -> X , only its child (div)
document.body.appendChild(fragment);

// 