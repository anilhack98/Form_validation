document.querySelector("#username").addEventListener("input", function (e) {
  const username = document.registerEmployee.username.value;
  const usernameError = document.querySelector(".usernameError");
  e.preventDefault();

  // Username validation
  const namePattern = /^[A-Za-z]+$/;
  if (username == "" || username.trim() == "") {
    usernameError.textContent = "Please enter your username.";
  } else if (username.length < 3 || username.length > 10) {
    usernameError.textContent =
      "Username should be between 3 and 10 characters.";
  } else if  (!username.match(namePattern)) {
    usernameError.textContent = "Username must contain only characters.";
  } else {
    usernameError.textContent = "";
  }
});
~
// Email validation
document.querySelector("#email").addEventListener("input", function (e) {
  const email = document.registerEmployee.email.value;
  const emailError = document.querySelector(".emailError");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email == "" || email.trim() == "") {
    emailError.textContent = "Please enter a valid email.";
  } else if (!email.match(emailPattern)) {
    emailError.textContent = "Please enter a valid email address.";
  } else {
    emailError.textContent = "";
  }
});

// Password validation
document.querySelector("#password").addEventListener("input", function (e) {
  const password = document.registerEmployee.password.value;
  const passwordError = document.querySelector(".passwordError");
  const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/; //To check a password between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter

  if (password == "" || password.trim() == "") {
    passwordError.textContent = "Please enter a valid password.";
  } else if (!password.match(passwordPattern)) {
    passwordError.textContent =
      "Password must be between 8 and 15 characters, and include at least one uppercase letter, one lowercase letter, one digit, and one special character.";
  } else {
    passwordError.textContent = "";
  }
});

document.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(username.value);
  console.log(email.value);
  console.log(password.value);
});
