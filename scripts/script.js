$(document).ready(function(){
	// burger menu animation
	$(".menu__toggler").click(function(){
		$(this).toggleClass("open");
	});

	// wow js
	new WOW().init();
});

// hide and show adaptive menu
function menuToggler() {
  let menuTogglerLink = document.querySelector(".menu__toggler");
  let menu = document.querySelector(".menu");

  menuTogglerLink.classList.toggle("opened");
  menu.classList.toggle("opened");
}
