
// JavaScript code to show/hide the sign-up form
const signupButton = document.getElementById('signupButton');
const signupFormContainer = document.getElementById('signupFormContainer');

signupButton.addEventListener('click', function() {
    // Toggle the visibility of the sign-up form
    if (signupFormContainer.style.display === 'none') {
        signupFormContainer.style.display = 'flex';
    } else {
        signupFormContainer.style.display = 'none';
    }
});
     const hamburger = document.querySelector('.hamburger');
     const wrapper = document.querySelector('.wrapper ul');

        hamburger.addEventListener('click', function() {
            // Toggle the 'active' class to show/hide the navigation menu
            nav.classList.toggle('active');
        });