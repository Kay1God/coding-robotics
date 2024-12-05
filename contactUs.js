// Form Validation
document.querySelector('.contact-form').addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const whatsapp = document.getElementById('whatsapp').value.trim();

    if (!name || !email || !message || !whatsapp) {
        alert('Please fill in all fields.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    alert('Message sent successfully!');
    event.target.reset(); // Clear form fields after submission
});

// Email Validation Function
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Google Maps - Add smooth scrolling to the map section
const mapContainer = document.querySelector('.map-container');

if (mapContainer) {
    mapContainer.style.transition = 'opacity 0.5s ease';
    mapContainer.style.opacity = 0;

    setTimeout(() => {
        mapContainer.style.opacity = 1;
    }, 300);
}
