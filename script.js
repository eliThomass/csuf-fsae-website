
 
// Get all the slide elements into a list
const slides = document.querySelectorAll("#slideshow .slide");
let currentSlideIndex = 0;

// Make the first slide visible when the page loads
slides[currentSlideIndex].classList.add("active-slide");

function changeSlide() {
    // Make the current slide inactive
    slides[currentSlideIndex].classList.remove("active-slide");

    // Update the index to the next slide, looping back to 0
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;

    // Make the new slide active
    slides[currentSlideIndex].classList.add("active-slide");
}
setInterval(changeSlide, 6000);