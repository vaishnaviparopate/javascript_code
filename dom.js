const { difference } = require("lodash");

console.log('dom.js loaded');
let boxes=document.getElementsByClassName("box");
console.log(boxes);
boxes[2].style.backgroundColor="pink";
// document.getElementsByClassName("box").style.backgroundColor="red"
// document.getElementsById("red").style.backgroundColor="red"
// document.querySelector(".box").style.backgroundColor="red"
// difference between NodeList and HTMLAllCollection

// NodeList: It's like a list of things (nodes) in a document. It can contain different types of things, like elements, texts, or comments. If something changes in the document, NodeList gets updated automatically.
// HTMLAllCollection: It's also like a list of things, but it only contains HTML elements. Like NodeList, it automatically updates if the document changes.
// In short, NodeList is more flexible, while HTMLAllCollection is limited to HTML elements only. Both update automatically when the document changes.


// matches:- check this id or class present in line or not
// closest:- check first id or class is present in line or not 
// if not present then it will check in parent if yes then print
//  element if not then next pareent it will check

// let e=document.getElementsByTagName("div")
// e[4].matches('#red')
// e[2].closest('#red')
// true




