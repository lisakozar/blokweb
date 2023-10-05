console.log("hi");

var menuButton = document.querySelector("header > button");
var hetMenu = document.querySelector("header nav");
var closeButton = document.querySelector("header nav button");

var prevButton = document.querySelector(".prev");
var nextButton = document.querySelector(".next");

var demoElements = document.querySelectorAll(".demo");

demoElements.forEach(function(element, index) {
  element.addEventListener("click", function() {
      // Call the "currentSlide" function with the appropriate argument
      currentSlide(index + 1); // Adjust the index as needed (1-based index)
  });
});

prevButton.addEventListener("click", function() {
  plusSlides(-1);
});

nextButton.addEventListener("click", function() {
  plusSlides(1);
});

// Declare slideIndex at the top of the script
let slideIndex = 0;

function toggleMenu() {
  console.log("'t werkt");
  hetMenu.classList.toggle("open");
}

menuButton.onclick = toggleMenu;
closeButton.onclick = toggleMenu;

/* uitprobeersel javascript */

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}

// Call showSlides to initialize the slideshow
showSlides(slideIndex);








