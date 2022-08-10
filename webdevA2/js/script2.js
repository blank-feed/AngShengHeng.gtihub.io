//menu
var menu=document.querySelector(".menu");
menu.addEventListener("click",function(){myFunction()});
myFunction();
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "directory menu") {
      x.className = "directory responsive";
    } else {
      x.className = "directory menu";
    }
  }
