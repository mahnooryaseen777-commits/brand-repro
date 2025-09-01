document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const article = this.article.value.trim();
  const message = this.message.value.trim();

  if (!name || !email || !article || !message) {
    alert("Please fill in all fields.");
    return;
  }

  // Simulate form submission
  alert("Your message has been submitted. We'll get back to you soon!");

  this.reset(); // Reset form
});