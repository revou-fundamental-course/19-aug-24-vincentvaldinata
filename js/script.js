document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Mencegah form dikirim secara default

  // Mengambil nilai input
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;

  // Menampilkan hasil input di dalam elemen HTML
  document.getElementById('display-name').textContent = name;
  document.getElementById('display-email').textContent = email;
  document.getElementById('display-phone').textContent = phone;
  document.getElementById('display-message').textContent = message;

  //change name in hero section
  document.getElementById('user').textContent = name;

});
