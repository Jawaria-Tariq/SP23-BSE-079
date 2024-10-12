const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const dob = document.getElementById('dob');
const btn = document.getElementById('btn');

btn.addEventListener("click", (event) => {
    event.preventDefault(); 

    let hasError = false;
    
    //If all Feilds are empty
    if (
        username.value === "" && 
        email.value === "" && 
        password.value === "" && 
        confirmPassword.value === "" && 
        dob.value === ""
    ) {
        alert("Please fill out all the fields.");
        hasError = true;
    }

    // If not all fields are empty
    if (!hasError) {
        // Username validation
        if (username.value === "") {
            alert("Please fill out the username field.");
            hasError = true;
        }

        // Email validation
        if (email.value === "") {
            alert("Please fill out the email field.");
            hasError = true;
        }

        // Password validation
        if (password.value === "") {
            alert("Please fill out the password field.");
            hasError = true;
        }

        // Confirm password validation
        if (confirmPassword.value === "") {
            alert("Please fill out the confirm password field.");
            hasError = true;
        } else if (password.value !== confirmPassword.value) {
            alert("Passwords do not match.");
            hasError = true;
        }

        // Date of birth validation
        if (dob.value === "") {
            alert("Please fill out the date of birth field.");
            hasError = true;
        }
    }

    if (!hasError) {
        alert("Form submitted successfully!");
    }
});
