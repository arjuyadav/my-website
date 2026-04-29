// Focus event handler
function focusInput() {
    console.log("Input field focused");
    // Change background color on focus
    event.target.style.backgroundColor = '#e6f7ff';
}

// Blur event handler
function blurInput() {
    console.log("Input field blurred");
    // Reset background color when focus is lost
    event.target.style.backgroundColor = '';
}

// Keydown event handler
function keyDownHandler(event) {
    console.log("Key pressed: " + event.key);
    // Show a message when a key is pressed in the username field
    if (event.target.id === 'username') {
        document.getElementById("username-message").innerText = "You pressed the " + event.key + " key!";
    }
}

// Keyup event handler
function keyUpHandler(event) {
    console.log("Key released: " + event.key);
    // Hide the message after the key is released
    if (event.target.id === 'username') {
        setTimeout(() => {
            document.getElementById("username-message").innerText = '';
        }, 500);
    }
}

// Input event handler
function inputChangeHandler() {
    console.log("Input value changed");
    // Update email message when input changes
    const emailField = document.getElementById("email");
    const emailMessage = document.getElementById("email-message");

    if (emailField.value.length < 5) {
        emailMessage.innerText = "Email is too short!";
    } else if (!emailField.value.includes('@')) {
        emailMessage.innerText = "Invalid email address!";
    } else {
        emailMessage.innerText = "";
    }
}

// Submit form handler (dummy submission)
function submitForm() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;

    if (username === "" || email === "") {
        alert("Please fill out all fields.");
    } else {
        alert("Form submitted successfully!");
    }
}
