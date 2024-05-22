// Get the navbar element
const navbar = document.getElementById('navbar');

// Define a function to toggle the background color
function toggleNavbarBackground() {
    if (window.scrollY === 0) {
        // When at the top, remove the background color
        navbar.classList.remove('navbar-bg');
    } else {
        // Otherwise, add the background color
        navbar.classList.add('navbar-bg');
    }
}

// Attach an event listener to the scroll event
window.addEventListener('scroll', toggleNavbarBackground);

// Initial call to set the background color based on the initial scroll position
toggleNavbarBackground();

const top = document.getElementById('top')
function 