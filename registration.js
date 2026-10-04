const form =
    document.getElementById("registrationForm");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    const name =
        document.getElementById("name").value.trim();
    const email =
        document.getElementById("email").value.trim();
    const mobile =
        document.getElementById("mobile").value.trim();
    const password =
        document.getElementById("password").value;
    const confirmPassword =
        document.getElementById("confirmPassword").value;
    const course =
        document.getElementById("course").value;
    const year =
        document.getElementById("year").value;
    const gender =
        document.querySelector(
            'input[name="gender"]:checked'
        );
    const terms =
        document.getElementById("terms").checked;
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("mobileError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("confirmPasswordError").textContent = "";
    document.getElementById("courseError").textContent = "";
    document.getElementById("yearError").textContent = "";
    document.getElementById("genderError").textContent = "";
    document.getElementById("termsError").textContent = "";
    document.getElementById("successMessage").textContent = "";
    const nameRegex =
        /^[A-Za-z ]{3,}$/;
    const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex =
        /^[0-9]{10}$/;
    const passwordRegex =
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}$/;
    let valid = true;
    if (name === "") {
        document.getElementById("nameError").textContent =
            "Name is required.";
        valid = false;
    }
    else if (!nameRegex.test(name)) {
        document.getElementById("nameError").textContent =
            "Please enter a valid name.";
        valid = false;
    }
    if (email === "") {
        document.getElementById("emailError").textContent =
            "Email is required.";
        valid = false;
    }
    else if (!emailRegex.test(email)) {
        document.getElementById("emailError").textContent =
            "Please enter a valid email address.";
        valid = false;
    }
    if (mobile === "") {
        document.getElementById("mobileError").textContent =
            "Mobile number is required.";
        valid = false;
    }
    else if (!mobileRegex.test(mobile)) {
        document.getElementById("mobileError").textContent =
            "Mobile number must contain exactly 10 digits.";
        valid = false;
    }
    if (password === "") {
        document.getElementById("passwordError").textContent =
            "Password is required.";
        valid = false;
    }
    else if (!passwordRegex.test(password)) {
        document.getElementById("passwordError").textContent =
            "Password must have 8 characters, uppercase, lowercase and number.";
        valid = false;
    }
    if (confirmPassword === "") {
        document.getElementById("confirmPasswordError").textContent =
            "Please confirm your password.";
        valid = false;
    }
    else if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").textContent =
            "Passwords do not match.";
        valid = false;
    }
    if (course === "") {
        document.getElementById("courseError").textContent =
            "Please select your course.";
        valid = false;
    }
    if (year === "") {
        document.getElementById("yearError").textContent =
            "Please select your year.";
        valid = false;
    }
    if (!gender) {
        document.getElementById("genderError").textContent =
            "Please select your gender.";
        valid = false;
    }
    if (!terms) {
        document.getElementById("termsError").textContent =
            "Please accept the Terms and Conditions.";
        valid = false;
    }
    if (valid) {
        document.getElementById("successMessage").textContent =
            "Registration successful!";
    }
});
document
    .getElementById("password")
    .addEventListener("input", function() {
        const password = this.value;
        const strength =
            document.getElementById("strengthText");
        if (password.length === 0) {
            strength.textContent = "None";
        }
        else if (password.length < 6) {
            strength.textContent = "Weak";
        }
        else if (password.length < 8) {
            strength.textContent = "Medium";
        }
        else {
            const uppercase =
                /[A-Z]/.test(password);
            const lowercase =
                /[a-z]/.test(password);
            const number =
                /[0-9]/.test(password);

            if (
                uppercase &&
                lowercase &&
                number
            ) {
                strength.textContent = "Strong";
            }
            else {
                strength.textContent = "Medium";
            }
        }
    });