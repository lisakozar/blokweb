// JavaScript Document
console.log("hi");

var menuButton = document.querySelector("header > button");
var hetMenu = document.querySelector("header nav");
var closeButton = document.querySelector("header nav button");

function toggleMenu() {
	console.log("'t werkt");
	hetMenu.classList.toggle("open");
}

menuButton.onclick = toggleMenu;
closeButton.onclick = toggleMenu;









