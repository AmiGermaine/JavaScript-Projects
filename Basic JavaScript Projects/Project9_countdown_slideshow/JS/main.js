function countdown() {
    var hours = document.getElementById("hours").value;

    function tick() {
        hours = hours - 1;
        timer.innerHTML = hours;
        var time = setTimeout(tick, 1000);
        if (hours == -1) {
            alert("Time's up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();
} 
// End of countdown function

//Slideshow

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}
  

// function showSlides() {
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     for (i = 0, i < slides.length; i++ ;) {
//         slides[i].style.display = "none";  
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) {slideIndex = 1}
//     slides[slideIndex-1].style.display = "block";
//     setTimeout(showSlides, 2000); // Change image every 2 seconds
// }