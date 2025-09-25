// Dark mode toggle
function toggleTheme() {
  
}
const toggleButton = document.getElementById("dark-mode-toggle");
if (toggleButton) {
  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
}

// Simple form validation
function validateForm() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();
  let formMessage = document.getElementById("formMessage");

  if (name === "" || email === "" || message === "") {
    formMessage.textContent = "All fields are required!";
    formMessage.style.color = "red";
    return false;
  } else {
    formMessage.textContent = "Message sent successfully!";
    formMessage.style.color = "green";
    return true;
  }
}
