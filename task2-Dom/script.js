//change image style and put in variable,to use it in cloning
let original = document.getElementById("header")
 original.style.textAlign = "right"


 //change list type from "bullet" to "circle"
document.getElementById("nav").style.listStyleType = "circle"


//take clone from (#header) node,use true for deep copy
let copy = original.cloneNode(true)
//change style of copy
copy.style.textAlign = "left"
//append copy to body
document.body.appendChild(copy)
