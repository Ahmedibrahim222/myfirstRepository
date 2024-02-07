document.addEventListener('DOMContentLoaded', function () {
    // Selecting LinkedIn and GitHub link containers
    const linkedInLink = createLink('https://www.linkedin.com/in/1ahmedibrahim/', 'LinkedIn');
    const linkedInContainer = document.getElementById('linkedin-link');
    linkedInContainer.appendChild(linkedInLink);

    const githubLink = createLink('https://github.com/Ahmedibrahim222', 'GitHub');
    const githubContainer = document.getElementById('github-link');
    githubContainer.appendChild(githubLink);

    // Selecting the H2 element for device name
    const deviceH2 = document.getElementById('deviceName');

    // Adding a resize event listener for responsive behavior
    window.addEventListener("resize", function () {
        // Get the screen width using the window's innerWidth property
        const screenWidth = window.innerWidth;

        // Set the text content based on different screen width ranges
        if (screenWidth >= 320 && screenWidth < 480) {
        } else if (screenWidth >= 481 && screenWidth <= 768) {
        } else if (screenWidth >= 769 && screenWidth <= 1024) {
        } else {
        }
    });

    // Function to create links
    function createLink(href, text) {
        const link = document.createElement('a');
        link.href = href;
        link.target = '_blank';
        link.textContent = text;
        return link;
    }

    // Function to toggle the menu
    function toggleMenu() {
        const menuLinks = document.querySelector('.menu-links');
        menuLinks.classList.toggle('open');
    }

    // Function to scroll to a section
    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth'
            });
            // Close the menu after clicking a link
            toggleMenu();
        }
    }

    // Event listener for scrolling to sections
    document.querySelectorAll('.menu-links a').forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const sectionId = link.getAttribute('href').substring(1);
            scrollToSection(sectionId);
        });
    });
});
