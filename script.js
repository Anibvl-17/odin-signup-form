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

// Name and Last name already have built-in messages
// So just to practice, I will add custom messages

const firstNameInput = document.getElementById('first-name');
firstNameInput.addEventListener('input', function() {
  if (firstNameInput.validity.tooShort) {
    firstNameInput.setCustomValidity('Name must be at least 2 characters long');
  } else if (firstNameInput.validity.tooLong) {
    firstNameInput.setCustomValidity('Name must be at most 30 characters long');
  } else {
    firstNameInput.setCustomValidity('');
  }
});

const lastNameInput = document.getElementById('last-name');
lastNameInput.addEventListener('input', function() {
  if (lastNameInput.validity.tooShort) {
    lastNameInput.setCustomValidity('Last name must be at least 2 characters long');
  } else if (lastNameInput.validity.tooLong) {
    lastNameInput.setCustomValidity('Last name must be at most 30 characters long');
  } else {
    lastNameInput.setCustomValidity('');
  }
});