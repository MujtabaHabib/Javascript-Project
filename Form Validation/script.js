document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("myForm");

  const fname = document.getElementById("fname");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirm-password");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const isFormValid = validate(); 
    if (isFormValid) {
      alert("Form submitted successfully!");
      form.reset();
    }
  });


  fname.addEventListener("input", validate);
  email.addEventListener("input", validate);
  phone.addEventListener("input", validate);
  password.addEventListener("input", validate);
  confirmPassword.addEventListener("input", validate);

  function validate() {
    const fnameValue = fname.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

    let isValid = true;

    if (fnameValue.length <= 5) {
      showError(fname, "Username must be at least 6 characters");
      isValid = false;
    } else {
      clearError(fname);
    }

    if (!/^\d{10}$/.test(phoneValue)) {
      showError(phone, "Phone number must be 10 digits");
      isValid = false;
    } else {
      clearError(phone);
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
      showError(email, "Enter a valid email id");
      isValid = false;
    } else {
      clearError(email);
    }

    if (passwordValue.length < 6) {
      showError(password, "Password must be at least 6 characters");
      isValid = false;
    } else {
      clearError(password);
    }

    if (confirmPasswordValue !== passwordValue || confirmPasswordValue === "") {
      showError(confirmPassword, "Passwords do not match");
      isValid = false;
    } else {
      clearError(confirmPassword);
    }

    return isValid;
  }

  function showError(input, message) {
    const formGroup = input.parentElement;
    const errorText = formGroup.querySelector(".formerror");
    errorText.innerText = message;
    formGroup.classList.add("error");
  }

  function clearError(input) {
    const formGroup = input.parentElement;
    const errorText = formGroup.querySelector(".formerror");
    errorText.innerText = "";
    formGroup.classList.remove("error");
  }
});
