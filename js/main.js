// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Notification
    let bell = document.querySelector('.notification');

    // Toggle Menu
    let menu = document.querySelector('.menu-icon');
    let navbar = document.querySelector('.menu');

    // Check if menu and navbar elements exist before adding event listener
    if (menu && navbar) {
        // Event listener for menu button click
        menu.addEventListener('click', () => {
            // Toggle 'active' class on navbar and 'move' class on menu
            navbar.classList.toggle('active');
            menu.classList.toggle('move');
            
            // If bell element exists, remove 'active' class
            if (bell) {
                bell.classList.remove('active');
            }
        });
    }

    // Check if bell element exists before adding event listener
    if (bell) {
        // Event listener for bell icon click
        document.querySelector('#bell-icon').addEventListener('click', () => {
            // Toggle 'active' class on bell element
            bell.classList.toggle('active');
        });
    }

    // Swiper Initialization
    var swiper = new Swiper(".trending-content", {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            1068: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
        },
    });

    // Login Popup Styles

    // Get the button that opens the login popup
    let showLoginButton = document.getElementById('show-login');

    // Get the login popup element
    let loginPopup = document.querySelector('.popup');

    // Get the close button inside the login popup
    let closeBtn = document.querySelector('.close-btn');

    // Get the login button inside the login popup
    let loginButton = document.querySelector('.form-element button');

    // Event listener for when the "Login" button is clicked
    showLoginButton.addEventListener('click', function () {
        // Add the 'active' class to show the login popup
        loginPopup.classList.add('active');
    });

    // Event listener for when the close button is clicked
    closeBtn.addEventListener('click', function () {
        // Remove the 'active' class to hide the login popup
        loginPopup.classList.remove('active');
    });

    // Event listener for clicks outside the login popup
    window.addEventListener('click', function (e) {
        // If the click is outside the login popup, hide it
        if (e.target === loginPopup) {
            loginPopup.classList.remove('active');
        }
    });

    // Event listener for when the "Log In" button inside the popup is clicked
    loginButton.addEventListener('click', function () {
        // Get the values entered in the email and password input fields
        let emailInput = document.getElementById('email').value;
        let passwordInput = document.getElementById('password').value;

        // Check if either email or password is empty
        if (emailInput.trim() === '' || passwordInput.trim() === '') {
            // Show an alert if either field is empty
            alert('Please enter both email and password.');
        } else {
            // Inform the user that email format is being checked
            alert('Checking email format. Please wait...');

            // Simulate a brief delay (2 seconds) for checking
            setTimeout(() => {
                // Check if the entered email is a valid format
                if (isValidEmail(emailInput)) {
                    // Check if the entered email and password match the demo credentials
                    if (emailInput === 'demo@example.com' && passwordInput === 'password') {
                        // Show a success alert and hide the login popup on successful login
                        alert('Login successful!');
                        loginPopup.classList.remove('active');
                    } else {
                        // Show an alert for invalid credentials
                        alert('Invalid email or password. Please try again.');
                    }
                } else {
                    // Show an alert for invalid email format
                    alert('Please enter a valid email address.');
                }
            }, 2000); // 2 seconds delay
        }
    });

    // Function to check if the entered email is in a valid format
    function isValidEmail(email) {
        // Use a simple check for '@' and '.com' in the email
        return email.includes('@') && email.endsWith('.com');
    }
});

      768: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1068: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });
