
var gender;
document.getElementById("male").addEventListener("click", function () {gender="male"});
document.getElementById("female").addEventListener("click", function () { gender = "femal" });
var coun = 0;

function makeCo() {
   coun = getCookie("counter");
  coun++;

  setCoockie("counter", coun, 1);
  var n = document.getElementById("coName").value;
  setCoockie("name", n, 1);
  var v = document.getElementById("coAge").value;
  setCoockie("age", v, 1);
  
  setCoockie("gender", gender, 1);
  
  var c = document.getElementById("colors").value;
  setCoockie("color", c, 1);
   
  location.assign("new.html");
  

}
function increaseCounter() {
 if(getCookie("gender")=="male")x=1
 else x=2
  document.getElementsByTagName("img")[0].src="imgs/"+x+".jpeg"
  let c = getCookie("counter")
  c=parseInt(c)
  setCoockie("counter", ++c, 1)
  document.getElementById("vv").innerText = "Mr " + getCookie("name") + " your age is " + getCookie("age") + " you visit this page " + getCookie("counter") + " times"
  document.getElementById("vv").style.color=getCookie("color")
}
var vn

function getNAME() {
  vn = document.getElementById("NAME").value;
}

function retrieve() {
  getNAME()
  var qq = getCookie(vn);
  var color = getCookie('color');
  document.getElementById("vv").style.color = color;
  document.getElementById("vv").innerText = qq;
}


function del() {
  getNAME()
  deleteCookie(vn);

  document.getElementById("vv").innerText = "deleted";
}

function retrieveALL() {
  var arr = allCookieList();
  
  document.getElementById("vv").innerText = arr.slice(1,);
  
}

function check() {
  getNAME()
  var has = hasCookie(vn);
  console.log(has);
  document.getElementById("vv").innerText = has;
}

