/*
Para: Proyecto final Desarrollo Front-End Ticmas
Autor: Jorge Alejandro N. Cannata
*/

const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('nav ul.menu');

menuToggle.addEventListener('click', function() {
	menu.classList.toggle('active');
});

/*
implementación de un boton para volver al inicio
*/



window.onscroll = function() {
	scrollFunction();
  };
  
  function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
	  document.getElementById("volver-arriba").style.display = "block";
	} else {
	  document.getElementById("volver-arriba").style.display = "none";
	}
  }
  
  document.getElementById("volver-arriba").onclick = function() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
  };
  