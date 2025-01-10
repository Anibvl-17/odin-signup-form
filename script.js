const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
confirmPasswordInput.addEventListener('input', function() {
  if (passwordInput.value === confirmPasswordInput.value) {
    confirmPasswordInput.setCustomValidity('');
  } else {
    confirmPasswordInput.setCustomValidity('Passwords must match');
  }
});

const phoneInput = document.getElementById('phone');
phoneInput.addEventListener('input', function() {
  if (phoneInput.validity.patternMismatch) {
    phoneInput.setCustomValidity('Expected the pattern 123-456-7890');
  } else {
    phoneInput.setCustomValidity('');
  }
});