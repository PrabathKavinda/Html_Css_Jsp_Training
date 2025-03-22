document.addEventListener("DOMContentLoaded", function() {
    const indicator = document.querySelector(".scroll-indicator .progress");
    
    if (!indicator) {
        console.error('Scroll indicator not found!');
        return;
    }

    function updateScrollIndicator() {
        const windowHeight = document.documentElement.clientHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const scrollable = documentHeight - windowHeight;
        
        if (scrollable > 0) {
            const scrolled = (scrollTop / scrollable) * 100;
            indicator.style.width = `${Math.min(100, Math.max(0, scrolled))}%`;
        }
    }

    // Update on load
    updateScrollIndicator();
    
    // Update on scroll
    window.addEventListener("scroll", updateScrollIndicator);
    
    // Update on resize
    window.addEventListener("resize", updateScrollIndicator);
});