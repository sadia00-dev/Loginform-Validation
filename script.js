const form = document.getElementById("loginform");
const username = document.getElementById("username");
const pass = document.getElementById("pass");

const userError = document.getElementById("userError");
const passError = document.getElementById("passError");

const nameRegex = /^[A-Za-z\s]+$/;

// Username Validation While Typing
username.addEventListener("input", function () {
  if (!nameRegex.test(username.value)) {
    userError.textContent = "Numbers are not allowed.";
    username.classList.add("error-border");
    username.classList.remove("success-border");
  } else {
    userError.textContent = "";
    username.classList.remove("error-border");
    username.classList.add("success-border");
  }
});

// Password Validation While Typing
pass.addEventListener("input", function () {
  if (pass.value.length < 8) {
    passError.textContent = "Password must be at least 8 characters long";

    pass.classList.add("error-border");
    pass.classList.remove("success-border");
  } else if (!/[A-Z]/.test(pass.value)) {
    passError.textContent = "1 Capital Letter must be included";

    pass.classList.add("error-border");
    pass.classList.remove("success-border");
  } else {
    passError.textContent = "";

    pass.classList.remove("error-border");
    pass.classList.add("success-border");
  }
});

// Form Submit Validation
form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;

  // Username Check
  if (!nameRegex.test(username.value)) {
    userError.textContent = "Numbers are not allowed.";

    username.classList.add("error-border");
    username.classList.remove("success-border");

    isValid = false;
  }

  // Password Length Check
  if (pass.value.length < 8) {
    passError.textContent = "Password must be at least 8 characters long";

    pass.classList.add("error-border");
    pass.classList.remove("success-border");

    isValid = false;
  }

  // Capital Letter Check
  else if (!/[A-Z]/.test(pass.value)) {
    passError.textContent = "1 Capital Letter must be included";

    pass.classList.add("error-border");
    pass.classList.remove("success-border");

    isValid = false;
  }

  // Successful Login
  if (isValid) {
    alert("Login Successful");

    form.reset();

    username.classList.remove("success-border", "error-border");

    pass.classList.remove("success-border", "error-border");

    userError.textContent = "";
    passError.textContent = "";
  }
});
