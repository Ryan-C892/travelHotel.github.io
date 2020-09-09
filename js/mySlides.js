// slideshow function
// shows the first image
//var slideIndex = 0;
//showDivs(slideIndex);

// next/prev controls
// subtracts one or adds one to slideIndex
/*function plusDivs(n) {
  showDivs(slideIndex += n);
}*/

/* hides display: "none;" from all elements with 
 the class name "mySlides" and displays the element with 
 the style display: "block" with the given slideIndex
 if the slideIndex is higher than the number of elements (x.length)
 the slideIndex is set to zero.
if the slideIndex is less than 1 it is set to number of elements (x.length) */
/*function showDivs(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}*/

/* Automatic Slideshow 
var slideIndex = 0;
showSlides(slideIndex);

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 7000); // Change image every 7 seconds
}*/

// Main Slideshow //
var slideIndex = 0;
showSlides();
// Global Timer Variable //
var slides,dots,timer;

function showSlides() {
    var i;
    slides = document.getElementsByClassName("mySlides");
    dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    timer = setTimeout(showSlides, 7000); // Change image every 7 seconds
}

function plusSlides(position) {
    // Stop Timer //
    slideIndex +=position;
    if (slideIndex > slides.length) {slideIndex = 1}
    else if(slideIndex < 1){slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    // Create a new timer //
    timer = setTimeout(showSlides, 14000);
}

function currentSlide(index) {
    // Stop Timer //
    clearTimeout(timer);
    if (index > slides.length) {index = 1}
    else if(index < 1){index = slides.length}
    // Set slideIndex with the same index of the function //
    slideIndex = index;
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[index-1].style.display = "block";  
    dots[index-1].className += " active";
    // Create a new timer //
    timer = setTimeout(showSlides, 21000);
}