document.addEventListener('DOMContentLoaded', function () {
    // Selecting LinkedIn and GitHub link containers
    const linkedInLink = createLink('https://www.linkedin.com/in/1ahmedibrahim/', 'LinkedIn');
    const linkedInContainer = document.getElementById('linkedin-link');
    linkedInContainer.appendChild(linkedInLink);

    const githubLink = createLink('https://github.com/Ahmedibrahim222', 'GitHub');
    const githubContainer = document.getElementById('github-link');
    githubContainer.appendChild(githubLink);

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

    // Event listener for showing the contact form
    const emailLink = document.getElementById('showForm');
    const formContainer = document.getElementById('contactFormContainer');
    emailLink.addEventListener('click', function (event) {
        event.preventDefault();
        formContainer.style.display = 'block';
    });

    // Event listener for form submission
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(contactForm); // Corrected typo here
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        // Construct the URL for form submission
        const formUrl = 'https://formspree.io/f/mrgnpndj'; // Change this to your form URL

        // Prepare the request body
        const requestBody = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, message })
        };

        // Send the form data asynchronously
        fetch(formUrl, requestBody)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to submit the form');
                }
                // Optionally, display a success message or redirect the user to a thank you page
                console.log('Form submitted successfully');
                window.location.href = "./index.html"; // Redirect to index.html
            })
            .catch(error => {
                console.error('Error submitting form:', error);
                // Optionally, display an error message to the user
            });
    });
});
