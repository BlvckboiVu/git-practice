//Form validation module

const submit = document.getElementById('submit');

submit.addEventListener('click', () => {
    event.preventDefault(); // Prevent form submission
    
    // Perform form validation
    const fullName = document.getElementById('fname').value;
    const password = document.getElementById('pwd').value;
    const confirmPassword = document.getElementById('pwd-rpt').value;
    const termsChecked = document.getElementById('tc').checked;

    // Clear previous error messages
    document.querySelectorAll('.error-message').forEach(function(errorMsg) {
        errorMsg.textContent = '';
    });

    // Check if full name is empty
    if (fullName.trim() === '') {
        displayErrorMessage('fnameError', 'Please enter your full name.');
        return;
    }

    // Check if password is empty
    if (password.trim() === '') {
        displayErrorMessage('pwdError', 'Please enter a password.');
        return;
    }

    // Check if password and confirm password match
    if (password !== confirmPassword) {
        displayErrorMessage('pwd-rptError', 'Passwords do not match.');
        return;
    }

    // Check if terms checkbox is checked
    if (!termsChecked) {
        displayErrorMessage('tcError', 'Please agree to the terms and conditions.');
        return;
    }

    // If all validations pass, submit the form
    alert('Form submitted successfully!');
    // Uncomment the following line to submit the form
    // submit.submit();
});

// Function to display error message above input field
function displayErrorMessage(id, message) {
    const errorElement = document.getElementById(id);
    errorElement.textContent = message;
}

