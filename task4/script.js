
let x, wed, hi, one,two,flower,i1=10,i2=480,ii=10,setInt,coun=0,btn;

//calculate the width and height of container 
x = window.getComputedStyle(document.getElementById("container"))
wed = x.getPropertyValue("width");
hi = x.getPropertyValue("height");
hi = parseInt(hi);
wed = parseInt(wed)

//initialize the position of first image
one = document.getElementById("icon1")
one.style.top=(hi/2)+"px"

//initialize the position of second image
two = document.getElementById("icon2")
tor=window.getComputedStyle(two)
twoWidth = parseInt(tor.getPropertyValue("width"));//<== calculate the width of image,so (container width - image width)=actual width
two.style.top = ((hi / 2)) + "px"
two.style.left=(wed-twoWidth)+"px"

//initialize the position of top image
t = document.getElementById("top")
t.style.left = wed/2 +"px"


//to change th value of btn from "go" to "stop" and vice versa
btn = document.getElementById("btn")
btn.addEventListener("click", () => {
    console.log(typeof btn.value);
    if (btn.value == "go") {
        go();
        btn.value="stop"
    }
    else {
        stop()
        btn.value="go"
    }
})

//using timeput to make animation with 50ms
function go() {
    one.style.left = (i1 + "px");
    two.style.left = (i2 + "px");
    t.style.top = (i1 + "px");
    i1 += ii;
    i2+=(ii*-1)
      
    coun += 10
    if (coun == 460) {
        ii *= -1
        coun=0
    }
    setInt = setTimeout(go, 50);
    
}
//stop animation
function stop() {
    clearTimeout(setInt)
}


//to reset all settings
function reset() {
    clearTimeout(setInt)
    btn.value = "go"
    
    one.style.left="0px"
    two.style.left = (wed - twoWidth) + "px"
    t.style.top = "0px"
    i1 = 10
    i2 = 480
    coun = 0
    ii=10
    
}



