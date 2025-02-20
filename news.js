const email = document.querySelector('#email');
const errorMessage = document.getElementById('error');
const userEmail = document.querySelector('input');
const form = document.querySelector('form');
const submit = document.getElementById('submit-btn');

email.addEventListener('input', () => {
  if (email.validity.typeMismatch) {
    errorMessage.style.display = 'flex';
  } else {
    errorMessage.style.display = 'none';
  }
});
