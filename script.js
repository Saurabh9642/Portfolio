/* scroll bar */
window.addEventListener("scroll", function() {
  const navbar = document.querySelector(".navbar");
  
  if (window.scrollY > 0) {
      navbar.classList.add("scrolled");
  } else {
      navbar.classList.remove("scrolled");
  }
});


//text js
const slider = document.querySelector('.text-slider');
let currentIndex = 0;

function slideText() {
    currentIndex = (currentIndex + 1) % slider.children.length;
    slider.style.transform = `translateY(-${currentIndex * 50}px)`; /* 50px is the height of each slide */
}

let slideInterval = setInterval(slideText, 3000); // Slide every 3 seconds

slider.addEventListener('mouseover', () => clearInterval(slideInterval));
slider.addEventListener('mouseout', () => slideInterval = setInterval(slideText, 3000));




// preloader js 
window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");

    setTimeout(() => {
        preloader.classList.add("hide-loader");
        // After the preloader is hidden, remove it from the DOM
        preloader.style.display = "none";
    }, 2500);
});


// Function to update the slider's position
function updateSliderPosition() {
    slider.style.top = -currentIndex * 400 + 'px';
}

// Function to show the next slide
function showNextSlide() {
    currentIndex = (currentIndex + 1) % slides1.length;
    updateSliderPosition();
}

// Function to start the automatic slide show
function startAutoSlide() {
    setInterval(showNextSlide, 5000); // Change slide every 3 seconds
}

// Start the slide show when the page loads
startAutoSlide();


/* profile js*/
document.addEventListener("DOMContentLoaded", function() {
  const btn = document.getElementById("Profile");
  const container = document.querySelector(".block");
  const close = document.getElementById("cl");

  btn.addEventListener("click", () => {
  container.classList.add("active");
  });

  close.addEventListener("click", () => {
  container.classList.remove("active");
  });
});


const preloader = document.querySelector(".preloader");

window.addEventListener("load", () => {
  setTimeout(() => {
    preloader.classList.add("hide-loader");
  }, 1000);
});


document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', function() {
      this.querySelector('.card-inner').classList.toggle('is-flipped');
  });
  });



  let slideIndex = 0;
  const slides = document.querySelector('.slides');
  const totalSlides = document.querySelectorAll('.slide').length;
  
  function moveSlide(n) {
    slideIndex += n;
  
    if (slideIndex >= totalSlides) {
      slideIndex = 0;
    } else if (slideIndex < 0) {
      slideIndex = totalSlides - 1;
    }
  
    slides.style.transform = `translateX(-${slideIndex * 100}%)`;
  }
  
  // Optional: Auto-slide every 5 seconds
  setInterval(() => {
    moveSlide(1);
  }, 5000);


  //NEXT slider javascrit 
  let activeSlide = 0;

document.addEventListener("DOMContentLoaded", () => {
  const slidesContainer = document.querySelector('.certification-slides');
  const slides = document.querySelectorAll('.certification-slide');
  const totalSlides = slides.length;

  function changeSlide(direction = 1) {
    // Update active slide index
    activeSlide += direction;
    if (activeSlide < 0) {
      activeSlide = totalSlides - 1; // Loop to last slide
    } else if (activeSlide >= totalSlides) {
      activeSlide = 0; // Loop to first slide
    }

    // Apply transformation to show the active slide
    slidesContainer.style.transform = `translateX(-${activeSlide * 100}%)`;
  }

  // Automatic slide scroll every 5 seconds
  setInterval(() => {
    changeSlide(1); // Move to the next slide
  }, 5000); // 5000 milliseconds = 5 seconds

  // Debug: Log current slide on initialization
  console.log("Slider initialized and auto-scroll set.");
});




  // script.js

document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
  });
});
