// Toggle course content visibility
document.querySelectorAll(".services-toggle").forEach((button) => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;
    content.style.display =
      content.style.display === "block" ? "none" : "block";
    button.textContent =
      button.textContent === "Ocultar" ? "Incluye" : "Ocultar";
  });
});

// Handle form submission
document.getElementById("subscribe-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = e.target.querySelector('input[type="email"]').value;
  alert(`Thank you for subscribing with email: ${email}`);
  e.target.reset();
});
