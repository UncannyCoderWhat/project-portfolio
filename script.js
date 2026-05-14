/* SCROLL REVEAL ENGINE */
document.addEventListener('DOMContentLoaded', () => {
    // Select all sections to be animated
    const sections = document.querySelectorAll('section');

    // Initialize: Add the 'reveal' class to all sections
    sections.forEach(section => {
        section.classList.add('reveal');
    });

    // Observer Configuration
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    // Intersection Observer Logic
    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Trigger the CSS animation
                entry.target.classList.add('active');
                
                // Stop observing once animated (Performance boost)
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    // Start watching each section
    sections.forEach(section => {
        revealOnScroll.observe(section);
    });
});