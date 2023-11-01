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
  setTimeout(showSlides, 4500);
}

window.onload = function() {
  var slideshow = document.getElementById("slideShow");
  var slides = document.querySelectorAll("#slides img");
  
  // 이미지 로딩 후 실행
  slides[0].onload = function() {
    var slideHeight = slides[0].height; // 첫 번째 이미지의 높이를 가져옴
    slideshow.style.height = slideHeight + "px"; // slideshow의 높이를 이미지 높이로 설정
  }
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