/**
 * This method adds functionality to a set of buttons with the class "collapse-button".
 * When a button is clicked, it expands or collapses the corresponding content.
 */
document.addEventListener('DOMContentLoaded', function() {
  // Retrieve all elements with the class "collapse-button"
  let buttons = document.getElementsByClassName('collapse-button');

  // Loop through each button
  for (let i = 0; i < buttons.length; i++) {
    // Add a click event listener to each button
    buttons[i].addEventListener('click', function() {
      // Get the next sibling element of the clicked button
      let content = this.nextElementSibling;

      // Check the display style property of the content element
      if (content.style.display === 'none' || content.style.display === '') {
        // If the content is hidden or has no inline style, display it and change the button text
        content.style.display = 'block';
        this.textContent = 'Read Less';
      } else {
        // If the content is visible, hide it and change the button text
        content.style.display = 'none';
        this.textContent = 'Read More';
      }
    });
  }
});

// Smooth scroll for nav links
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Handle form submission
const form = document.querySelector('.contact-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (validateForm()) {
    form.submit();
  }
});

/**
 * Validates the form fields and displays error messages if necessary.
 * Returns true if the form is valid, false otherwise.
 */
function validateForm() {
  let isValid = true;
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  const errorElement = document.getElementById('error-message');

  errorElement.innerHTML = '';

  if (name === '' || email === '' || message === '') {
    errorElement.innerHTML = 'Please fill out all fields.';
    isValid = false;
  } else if (!isValidEmail(email)) {
    errorElement.innerHTML = 'Please enter a valid email address.';
    isValid = false;
  }

  return isValid;
}

/**
 * Checks if the given email address is valid.
 * Returns true if the email address is valid, false otherwise.
 */
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}



// document.addEventListener('DOMContentLoaded', function() {
//   let collapsible = document.querySelector('.collapsible');
//   var collapsibleContent = collapsible.querySelector('.collapsible-content');

//   collapsible.addEventListener('click', function() {
//     collapsible.classList.toggle('open');
//   });
// });


