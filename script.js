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

/* SYSTEM BOOT & NAVIGATION LOGIC */

window.addEventListener('load', () => {
    bootSystem();
});

function bootSystem() {
    // Add the scanline flicker class
    document.body.classList.add('booting');
    
    // Trigger the fade in
    setTimeout(() => {
        document.body.classList.add('system-online');
    }, 100);

    // Clean up the boot class after animation finishes
    setTimeout(() => {
        document.body.classList.remove('booting');
    }, 1000);
}

// Re-trigger animation when clicking the "Home" link
const homeLink = document.querySelector('a[href="#home"]');
if (homeLink) {
    homeLink.addEventListener('click', (e) => {
        // Only trigger if we aren't already at the top
        if (window.scrollY > 100) {
            document.body.classList.remove('system-online');
            
            // Short delay to allow the fade-out before jumping/fading back in
            setTimeout(() => {
                bootSystem();
            }, 300);
        }
    });
}