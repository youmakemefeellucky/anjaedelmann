var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var images = $( ".main-image" );
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > images.length) {slideIndex = 1}
  images[slideIndex-1].style.display = "block";
  setTimeout(carousel, 3000);
};
