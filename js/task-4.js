const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  const emailValue = email.value.trim();

  const passwordValue = password.value.trim();

  if (!emailValue || !passwordValue) {
    alert("All form fields must be filled in");
    return;
  }

  const userData = {
    email: emailValue,
    password: passwordValue,
  };

  console.log(userData);

  loginForm.reset();
});
