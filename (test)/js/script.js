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
    alert('Hi');
  }
}