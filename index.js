// Nav link active color
handleNavLink();

function handleNavLink() {
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            // Remove 'active' from all links
            navLinks.forEach(item => item.classList.remove("active"));

            // Add 'active' to the clicked link
            this.classList.add("active");
        });
    });
}


// Slideshow 
let slideIndex = 0;
carousel();

function carousel() {
    const slides = document.querySelectorAll(".mySlides");
    if (!slides || slides.length === 0) return; // Exit if page has no slider

    slides.forEach(slide => {
        slide.style.display = "none";
    });

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block";

    setTimeout(carousel, 4000);
}

