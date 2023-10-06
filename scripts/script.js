console.log("hi");
// de vars roepen alles aan
var menuButton = document.querySelector("header > button");
var hetMenu = document.querySelector("header nav");
var closeButton = document.querySelector("header nav button");
var prevButton = document.querySelector(".prev");
var nextButton = document.querySelector(".next");
var demoElements = document.querySelectorAll(".demo");

let slideIndex = 0;

demoElements.forEach(function(element, index) {
  element.addEventListener("click", function() {
      // Roept de currentslide op zodat die word weergegeven
      currentSlide(index + 1); 
  });
});
// terugknop
prevButton.addEventListener("click", function() {
  plusSlides(-1);
});
// volgende knop
nextButton.addEventListener("click", function() {
  plusSlides(1);
});

// Toggled het menu open en dicht
function toggleMenu() {
  console.log("'t werkt");
  hetMenu.classList.toggle("open");
}

menuButton.onclick = toggleMenu;
closeButton.onclick = toggleMenu;


// wanneer het naar de volgende foto gaat pakt het de index + het nummer
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// current slide is de slide waar de carousel op dat moment zit
function currentSlide(n) {
  showSlides(slideIndex = n);
}
// let word gebruikt omdat het kan worden reassigned
function showSlides(n) {
  // any
  let i;
  // roept de slides en kleine fotos aan
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  // zorgt ervoor dat de slideshow word gereset na zoveel fotos 
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  // zorgt ervoor dat de slides niet te zien zijn wanneer het niet nodig is
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // zorgt ervoor dat de slides weer te zien zijn met display
  slides[slideIndex - 1].style.display = "block";
}

// roept de slides op voor de carousel/slideshow
showSlides(slideIndex);








