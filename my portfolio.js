const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function() {
    navLinks.classList.toggle("active");
});

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        navLinks.classList.remove("active");
    });
});

document.getElementById("year").textContent = new Date().getFullYear();