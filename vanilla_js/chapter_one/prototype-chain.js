const el = document.querySelector("div");
/* el (instance) => HTMLDivElement -> HTMLElement -> Element -> Node -> EventTarget -> Object -> null
  These are the constructors, Prototype Chain goes through their `.prototype` objects 
  el (instance) => HTMLDivElement.prototype -> HTMLElement.prototype -> Element.prototype -> Node.prototype -> EventTarget.prototype -> Object.prototype -> null

  1. Element Object 
    HTMLDivElement
    HTMLParagraphElement
    HTMLSpanElement
    HTMLInputElement
    HTMLButtonElement
    HTMLImageElement
    HTMLAnchorElement
    
    - They are all inheriting the same as the HTMLDivElement

  2. Text Node
    - Text -> CharacterData -> Node -> EventTarget -> Object

  2.1. Comment Node
    - Comment -> CharacterData -> Node -> EventTarget -> Object

  3. Document (represents the whole document)
    - HTMLDocument -> Document -> Node -> EventTarget -> Object

  4. Window
    window -> document -> DOM tree

  */




const p = document.createElement("p");
p.textContent = "Hello";

document.body.appendChild(p);

/*
createElement creates a Node in the memory
that Node doesn't have a parent
appendChild is connecting that node with document.body 
it becomes a part of DOM tree

if Node is already in DOM, appendChild just moves it 
appendChild always places a new node at the end of the parent elements list of children 
*/