const email = document.querySelector('#email');
const emailConfirmation = document.getElementById('user-email');
const errorMessage = document.getElementById('error');
const form = document.querySelector('form');
const submit = document.getElementById('submit-btn');

email.addEventListener('input', () => {
  if (email.validity.typeMismatch) {
    errorMessage.style.display = 'flex';
  } else {
    errorMessage.style.display = 'none';
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (email.value.includes('@') && email.value.includes('gmail.com')) {
    setTimeout(() => {
      window.location.href = `confirmation.html?email=${encodeURIComponent(
        email.value
      )}}`;
    }, 100);
  } else {
    errorMessage.style.display = 'flex';
  }
});

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

const userEmail = getQueryParam('email');
if (emailConfirmation && userEmail) {
  emailConfirmation.textContent = decodeURIComponent(userEmail);
}

const dismissConfirmation = document.getElementById('dismiss');

dismissConfirmation.addEventListener('click', () => {
  setTimeout(() => {
    window.location.href = 'index.html';
  }, 1000);
});
