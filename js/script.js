// JavaScript code to validate form and show the input values on form submission

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting the traditional way

  // Retrieve input values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;

  // Simple validation (can be expanded with more complex rules)
  if (name && email && phone && message) {
      alert(`Thank you, ${name}! Your message has been sent.\n\nDetails:\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`);
  } else {
      alert('Please fill in all the fields.');
  }
});
