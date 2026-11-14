


const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuToggle.textContent = "×";
    } else {
        menuToggle.textContent = "☰";
    }

});




document.querySelectorAll(".nav-links a").forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("active");
        menuToggle.textContent = "☰";

    });

});





const certificateButtons = document.querySelectorAll(".view-btn");

const certificateModal = document.getElementById("certificateModal");

const modalImage = document.getElementById("modalImage");

const modalTitle = document.getElementById("modalTitle");

const closeModal = document.getElementById("closeModal");





certificateButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const image = button.getAttribute("data-image");

        const title = button.getAttribute("data-title");

        modalImage.src = image;

        modalTitle.textContent = title;

        certificateModal.classList.add("active");

    });

});




closeModal.addEventListener("click", function() {

    certificateModal.classList.remove("active");

});



certificateModal.addEventListener("click", function(event) {

    if (event.target === certificateModal) {

        certificateModal.classList.remove("active");

    }

});



document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        certificateModal.classList.remove("active");

    }

});


document.getElementById("year").textContent =
    new Date().getFullYear();

