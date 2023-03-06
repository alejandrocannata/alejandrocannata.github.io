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
  
/*
	Galeria de imagenes

*/
var modalGaleria = document.getElementById("modal-galeria");
            var btnCerrar = document.getElementsByClassName("btnCerrar")[0];
            const imagenes = document.getElementsByClassName("img1");
            var imagenModal = document.getElementById("imagenModal");
            
            /* bucle for para cada imagen con la class img1 */
            for(let i=0; i< imagenes.length; i++){
                imagenes[i].onclick = function(){ /*crea el evento para cada imagen del array*/
                    modalGaleria.style.display = "block";
                    imagenModal.src = imagenes[i].src; /* intercambio el src de las imagenes */
                }
            }

            btnCerrar.onclick = function() { modalGaleria.style.display = "none"; } /* Cerrar la ventana modal */

            window.onclick = function(event) { /* Cerrar la ventana si el click es afuera de la ventana modal*/
                                            if (event.target == modalGaleria) {
                                            modalGaleria.style.display = "none";
                                             }
            }