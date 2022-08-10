//menu
var menu=document.querySelector(".menu");
menu.addEventListener("click",function(){myFunction()});
//myFunction();
function myFunction() {
  var x = document.getElementById("myTopnav");
    if (x.className === "directory menu") {
      x.className = "directory responsive";
    } else {
      x.className = "directory menu";
    }
  }

  
  var z=window.matchMedia("(min-width: 540px)");
  z.addEventListener("change",match)

  function match() {
    var x = document.getElementById("myTopnav");
    if (z.matches == true) { // If media query matches
      x.className = "directory menu";
      console.log("egrs");
      myFunction();
    } 
  }
  