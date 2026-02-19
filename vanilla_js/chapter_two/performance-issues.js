/* 
 A lot of performance issues come with querying the whole document
 But what if we create some type of cache reference?
 
 Doing the first example is costly
 The browser must :
 1. Parse the selector
 2. Traverse the DOM
 3. Match nodes against the selector
 4. Return the first match
 When the root is document, the search scope is actually the entire tree
 And if we do it repeatedly, each call starts at a document root, scans untill match - it can hurt performance if we have
 a large DOM 

 But in the second example, it is called SCOPED QUERYING
 First query finds <nav> once
 Second query searches INSIDE that subtree
 Search space is drastically reduced 
 `nav` is a stored reference to a DOM node in memory 
*/

// Instead of
document.querySelector("span");
document.querySelector("span#badge");



// We can do
let nav = document.querySelector("nav")
nav.querySelector("span#badge")