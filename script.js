const form = document.getElementById("loginform");
const username = document.getElementById("username");
const pass = document.getElementById("pass");

const userError = document.getElementById("userError");
const passError = document.getElementById("passError");

const nameRegex = /^[A-Za-z]+$/;

function validateForm() {
  let isValid = true;

  // Username validation
  if (!nameRegex.test(username.value)) {
    userError.textContent = "Only letters are allowed (no numbers).";
    username.classList.add("error-border");
    username.classList.remove("success-border");
    isValid = false;
  } else {
    userError.textContent = "";
    username.classList.add("success-border");
    username.classList.remove("error-border");
  }

  // Password validation
  if (pass.value.length < 8) {
    passError.textContent = "Password must be at least 8 characters long";
    pass.classList.add("error-border");
    pass.classList.remove("success-border");
    isValid = false;
  } else if (!/[A-Z]/.test(pass.value)) {
    passError.textContent = "Password must include at least 1 capital letter";
    pass.classList.add("error-border");
    pass.classList.remove("success-border");
    isValid = false;
  } else {
    passError.textContent = "";
    pass.classList.add("success-border");
    pass.classList.remove("error-border");
  }

  // age validation
  const ageSelected = document.querySelector('input[name="age"]:checked');
  if (ageSelected.value === "under18") {
    ageError.textContent = "";
    alert("You can't login because you are under 18");
    isValid = false;
  } else {
    ageError.textContent = "";
  }

  if (isValid) {
    alert("Login Successful");

    form.reset();

    username.classList.remove("success-border", "error-border");
    pass.classList.remove("success-border", "error-border");

    userError.textContent = "";
    passError.textContent = "";

    return false;
  }

  return false;
}
