
document.addEventListener('DOMContentLoaded', () => {

    // Find the button and the navigation menu in the document
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    // Add an event listener to the button
    // When the button is clicked, run this function
    menuToggle.addEventListener('click', () => {
        // Toggle the 'show' class on the <nav> element
        // If it has the class, remove it. If it doesn't, add it.
        nav.classList.toggle('show');
    });

});