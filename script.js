document.getElementById('book-now').addEventListener('click', function () {
  const form = document.getElementById('booking-form');
  if (form.checkValidity()) {
    window.location.href = 'redirect.html';
  } 
});
