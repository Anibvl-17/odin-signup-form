const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
confirmPasswordInput.addEventListener('input', function() {
  if (passwordInput.value === confirmPasswordInput.value) {
    confirmPasswordInput.setCustomValidity('');
  } else {
    confirmPasswordInput.setCustomValidity('Passwords must match');
  }
});