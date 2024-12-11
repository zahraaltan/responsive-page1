document.getElementById('book-now').addEventListener('click', function (e) {
  e.preventDefault(); // Prevent default button behavior
  const form = document.getElementById('booking-form');
  if (form.checkValidity()) {
    window.location.href = 'redirect.html';
  } else {
    alert('Please fill out all fields correctly.');
  }
});
