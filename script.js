addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    let isValid = true;
    let messages = [];

    if (username.length < 3) {
      isValid = false;
      messages.push("Username can not be less than 3 letters");
    }
    if (!/^[a-zA-Z0-9_.+%]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      isValid = false;
      messages.push("Email is not valid");
    }
    if (password.length < 8) {
      isValid = false;
      messages.push("password length should at least be 8");
    }
    feedbackDiv.style.display = "block";
    let text = messages.join("<br>");
    if (isValid) {
      feedbackDiv.textContent = "Registration successful";
      feedbackDiv.style.color = "#28a745";
    } else if (!isValid) {
      feedbackDiv.innerHTML = text;
      feedbackDiv.style.color = "#dc3545";
    }
    form.sumbit();
  });
});
