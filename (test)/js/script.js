// Fixed menu
window.onscroll = function() {myFunction()};

var menu = document.getElementById("menu");

var sticky = 0;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    menu.classList.add("sticky")
  } 
  else {
    menu.classList.remove("sticky");
    menu.style.background = 'none';
  }
}

// Menu button event
let nav = document.querySelector('.menu .right .navbar');
let b2 =  document.querySelector('.menu .right .b2');

b2.onclick = function() {
  if(nav.style.display === "none") {
    nav.style.display = "inline";
  } else {
    nav.style.display = "none";
  }
}
