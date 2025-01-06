// Dynamic Welcome Message
document.addEventListener("DOMContentLoaded", () => {
  const welcomeMessage = document.querySelector("#welcome-message");
  const currentDate = new Date();
  const hours = currentDate.getHours();

  let greeting;
  if (hours < 12) {
    greeting = "Good Morning";
  } else if (hours < 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  welcomeMessage.textContent = `${greeting}, luv!`;
});

// Theme Switcher
function toggleTheme() {
  const body = document.body;
  body.classList.toggle("dark-theme");

  // Change button text based on theme
  const themeButton = document.querySelector("#theme-button");
  if (body.classList.contains("dark-theme")) {
    themeButton.textContent = "Switch to Light Theme";
  } else {
    themeButton.textContent = "Switch to Dark Theme";
  }
}
