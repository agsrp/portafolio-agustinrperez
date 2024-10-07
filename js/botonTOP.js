let botonTOP = document.getElementById("botonTOP");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    botonTOP.style.display = "block";
  } else {
    botonTOP.style.display = "none";
  }
}


function subirTOP() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
}