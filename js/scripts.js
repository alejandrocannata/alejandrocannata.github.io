/*
Para: Proyecto final Desarrollo Front-End Ticmas
Autor: Jorge Alejandro N. Cannata
*/

const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('nav ul.menu');

menuToggle.addEventListener('click', function() {
	menu.classList.toggle('active');
});