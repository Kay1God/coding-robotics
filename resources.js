// Dynamic Loading of Resources
const resources = [
    { title: "Downloadable Resources", link: "#", description: "Find PDFs, assignments, and worksheets." },
    { title: "Video Tutorials", link: "#", description: "Watch step-by-step lessons." },
    { title: "FAQs", link: "#", description: "Get answers to common questions." },
];

const resourceContainer = document.querySelector('main');

resources.forEach((resource) => {
    const resourceCard = document.createElement('div');
    resourceCard.className = 'resource-card';

    resourceCard.innerHTML = `
        <h2>${resource.title}</h2>
        <p>${resource.description}</p>
        <a href="${resource.link}" target="_blank">Learn More</a>
    `;

    resourceContainer.appendChild(resourceCard);
});

// Add fade-in animation for resource cards
document.querySelectorAll('.resource-card').forEach((card, index) => {
    card.style.opacity = 0;
    card.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        card.style.opacity = 1;
    }, index * 200);
});
