 var button = document.getElementById("registerBTN");

//to stop or continue submitting
button.addEventListener("click", function () {
 
    var x = confirm("continue submitting?");
    if (x) {
        button.setAttribute("type","submit")
    }  

})


//check if user does not type anything in at least one input
inputs = document.querySelectorAll("input");
var newEvent = new Event("timeout");
document.addEventListener("timeout", function () {
    console.log(inputs[0].value=="");
    var timeout;
     {

        
        timeout = setInterval(function () {
            if (inputs[0].value == "" && inputs[1].value == "") {
                alert("please enter your data");
            }
            else {
                document.getElementById("note").innerText = "now alert will not appear"
                document.getElementById("note").style.color="red"
                clearInterval(timeout)
            }
            }, 5000);
        
       
            
        
    }
    
});

document.dispatchEvent(newEvent);

