// JavaScript for Form Validation
document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.getElementById('registration-form');

    if (registrationForm) {
        registrationForm.addEventListener('submit', function (event) {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (!name || !email || !message) {
                alert('Please fill out all fields before submitting.');
                event.preventDefault();
            } else {
                alert('Form submitted successfully!');
            }
        });
    }

    // Toggle the mobile navigation menu
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function () {
            navMenu.classList.toggle('active');
        });
    }
});

// Scroll to top functionality
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
}

scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
