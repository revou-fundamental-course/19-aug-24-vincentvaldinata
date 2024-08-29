document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah form dikirim secara default

    // Mengambil nilai input
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    // Menampilkan hasil input di dalam elemen HTML
    document.getElementById("display-name").textContent = name;
    document.getElementById("display-email").textContent = email;
    document.getElementById("display-phone").textContent = phone;
    document.getElementById("display-message").textContent = message;

    //change name in hero section
    document.getElementById("user").textContent = name ? name : "Guest";
  });

// Initial greeting on page load
function greetUser() {
  const urlParams = new URLSearchParams(window.location.search);
  const userName = urlParams.get("name") || "Guest"; // Default to "Guest" if no name is provided
  document.getElementById("user").textContent = userName;
}

// Call the greetUser function when the page loads
window.onload = greetUser;

// Slider Functionality
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Set the initial slide
showSlide(currentSlide);

// Automatically change slides every 3 seconds
setInterval(nextSlide, 3000);
