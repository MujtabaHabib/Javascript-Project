document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myForm");

    const fname = document.getElementById("fname");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm-password");

    function validateEmail(value) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }

    function validatePhone(value) {
        return /^[6-9]\d{9}$/.test(value);
    }

    function validatePassword(value) {
        return /^(?=.*[A-Z])(?=.*\d).{6,}$/.test(value);
    }

    function showError(input, message) {
        const errorSpan = input.nextElementSibling;
        if (message) {
            input.style.borderColor = "red";
            errorSpan.textContent = message;
        } else {
            input.style.borderColor = "green";
            errorSpan.textContent = "";
        }
    }

    // Real-time validation
    fname.addEventListener("input", () => {
        showError(fname, fname.value.trim() === "" ? "Name is required" : "");
    });

    email.addEventListener("input", () => {
        showError(email, validateEmail(email.value) ? "" : "Invalid email format");
    });

    phone.addEventListener("input", () => {
        showError(phone, validatePhone(phone.value) ? "" : "Invalid 10-digit phone number");
    });

    password.addEventListener("input", () => {
        showError(password, validatePassword(password.value) ? "" : "Min 6 chars, 1 uppercase, 1 number");
    });

    confirmPassword.addEventListener("input", () => {
        showError(confirmPassword, confirmPassword.value === password.value ? "" : "Passwords do not match");
    });

    form.addEventListener("submit", function (e) {
        let valid = true;

        if (fname.value.trim() === "") {
            showError(fname, "Name is required");
            valid = false;
        }

        if (!validateEmail(email.value)) {
            showError(email, "Invalid email format");
            valid = false;
        }

        if (!validatePhone(phone.value)) {
            showError(phone, "Invalid 10-digit phone number");
            valid = false;
        }

        if (!validatePassword(password.value)) {
            showError(password, "Min 6 chars, 1 uppercase, 1 number");
            valid = false;
        }

        if (confirmPassword.value !== password.value) {
            showError(confirmPassword, "Passwords do not match");
            valid = false;
        }

        if (!valid) {
            e.preventDefault(); // stop form from submitting
        }
    });
});
