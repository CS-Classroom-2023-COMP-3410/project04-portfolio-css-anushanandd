let slideIndex = 0;

showSlide(slideIndex);

function changeSlide(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    const slides = document.querySelectorAll(".slide");

    if (n >= slides.length) {
        slideIndex = 0; // Loop back to the first slide
    }
    if (n < 0) {
        slideIndex = slides.length - 1; // Loop to the last slide
    }

    slides.forEach(slide => (slide.style.display = "none")); // Hide all slides
    slides[slideIndex].style.display = "block"; // Show the current slide
}