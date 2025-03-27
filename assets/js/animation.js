// Number animation function
function animateNumber(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const step = target / (duration / 16); // 60fps
    let current = 0;

    const updateNumber = () => {
        current += step;
        if (current < target) {
            element.textContent = Math.round(current);
            requestAnimationFrame(updateNumber);
        } else {
            element.textContent = target;
        }
    };

    updateNumber();
}

// Intersection Observer to trigger animation when element is in view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const numbers = entry.target.querySelectorAll('.animate-number');
            numbers.forEach(number => animateNumber(number));
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.5
});

// Observe all data-animation sections
document.querySelectorAll('.data-animation').forEach(section => {
    observer.observe(section);
}); 