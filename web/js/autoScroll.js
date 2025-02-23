document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".scroll-here");
    const navLinks = document.querySelectorAll("#header-main-menu ul li a");

    function changeActiveNav() {
        let currentSection = "";
        const scrollPosition = window.scrollY + window.innerHeight / 2;
    
        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 90;
            const sectionBottom = sectionTop + section.offsetHeight;
    
            if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
                currentSection = section.getAttribute("id");
            }
        });
    
        navLinks.forEach((link) => {
            link.parentElement.classList.remove("active");
            if (link.getAttribute("href").includes(currentSection)) {
                link.parentElement.classList.add("active");
            }
        });
    }

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            const targetPosition = targetElement.offsetTop - 54;
            const startPosition = window.scrollY;
            const distance = targetPosition - startPosition;
            const duration = 1600;
            const startTime = performance.now();
    
            function scrollStep(currentTime) {
                const elapsedTime = currentTime - startTime;
                const progress = Math.min(elapsedTime / duration, 1);
                window.scrollTo(0, startPosition + distance * easeInOutQuad(progress));
    
                if (progress < 1) {
                    requestAnimationFrame(scrollStep);
                }
            }
    
            function easeInOutQuad(t) {
                return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
            }
    
            requestAnimationFrame(scrollStep);
        }
    }

    // Attach smooth scroll to menu links
    navLinks.forEach((link) => {
        link.addEventListener("click", smoothScroll);
    });

    // Update active nav item on scroll
    window.addEventListener("scroll", changeActiveNav);
    window.addEventListener("resize", changeActiveNav);

    // Initial call to highlight the right menu item
    changeActiveNav();
});
