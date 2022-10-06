//load slideshow
window.addEventListener('load', function() {
  slideShow(slidePosition);
});

//slideshow function
let slidePosition = 1;

function slideShow(n) {
  let i;
  let slides = document.getElementsByClassName("carousel_slide");
  // if slide position is greater than the number of slides, reset slide position to first slide
  if (n > slides.length) {
    slidePosition = 1};
  //if slide position is less than the number of slides, reset slide position to last slide
  if (n < 1) {
    slidePosition = slides.length}

  // loop through all slides, set display to none
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  
  // set current slide to display as block
 slides[slidePosition-1].style.display = "block";
  
} 

// forward/Back controls
function plusSlides(n) {
  slideShow(slidePosition += n);
}













