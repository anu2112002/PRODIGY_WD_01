// script.js

document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');

    // Change navbar background on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Optional: Change color of links on hover
    navLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            link.style.color = '#f39c12';
        });

        link.addEventListener('mouseout', function() {
            link.style.color = '#fff';
        });
    });
});
