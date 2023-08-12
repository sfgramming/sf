var current = 0;
showSlides();

function showSlides() {
  var slides = document.querySelectorAll("#slides > img");
  for(let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  current++;
  if(current > slides.length)
  current=1;
  slides[current -1].style.display = "block";
  setTimeout(showSlides, 3500);
}



/*showSlides(current);
prev.onclick = prevSlide;
next.onclick = nextSlide;

function showSlides(n) {
  for (var i = 0; i< slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[n].style.display = "block";
}

function prevSlide() {
  if(current > 0) current -= 1;
  else current = slides.length -1;
  showSlides(current);
}

function nextSlide() {
  if (current < slides.length -1 ) current +=1;
  else current =0;
  showSlides(current);
}*/