//1- display the ascii code of clicked button
document.onkeydown=function () {
    alert("the ascii code is : " + event.which)
    if(event.altKey)
    alert("you clicked alt key")
    else if (event.ctrlKey)
    alert("you clicked ctrl key")
    else if (event.shiftKey)
        alert("you clicked shift key")
    else alert("you did not click any of alr, crtl or shift")
}


//2- prevent context while click on right click mouse
window.addEventListener('contextmenu', (event) => {
    document.getElementById("clicked").innerText="right mouse is clicked,but contextmenu not open"
    event.preventDefault()
})
  

//