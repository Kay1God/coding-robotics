// Add hover animation for pricing cards
document.querySelectorAll('.pricing-card').forEach((card) => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.1)';
        card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
        card.style.boxShadow = 'none';
    });
});
