document.addEventListener('DOMContentLoaded', () => {
  const email = document.getElementById('email');
  const form = document.querySelector('form');
  const error = document.getElementById('error');

  if (form) {
    email.addEventListener('input', () => {
      if (email.validity.typeMismatch || !email.value.includes('gmail.com')) {
        error.style.display = 'flex';
      } else {
        error.style.display = 'none';
      }
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (email.validity.typeMismatch && !email.value.includes('gmail.com')) {
        error.style.display = 'flex';
      } else {
        error.style.display = 'none';
        setTimeout(() => {
          window.location.href = `confirmation.html?email=${encodeURIComponent(
            email.value
          )}`;
        }, 1000);
      }
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const emailConfirmation = document.getElementById('user-email');
  const userEmail = getQueryParam('email');

  if (emailConfirmation && userEmail) {
    emailConfirmation.textContent = decodeURIComponent(userEmail);
  }

  const dismiss = document.getElementById('dismiss');
  if (dismiss) {
    dismiss.addEventListener('click', () => {
      window.location.href = 'index.html';
    });
  }
});

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}
// console.log(
//   'User email from URL:',
//   new URLSearchParams(window.location.search).get('email')
// );
// console.log(
//   'Email confirmation element:',
//   document.getElementById('user-email')
// );

// document.addEventListener('DOMContentLoaded', () => {
//   const email = document.querySelector('#email');
//   const form = document.querySelector('form');
//   const errorMessage = document.getElementById('error');

//   if (form) {
//     form.addEventListener('submit', (e) => {
//       e.preventDefault();
//       if (email.value.includes('@') && email.value.includes('.')) {
//         console.log('Form submitted with email:', email.value);
//         setTimeout(() => {
//           window.location.href = `confirmation.html?email=${encodeURIComponent(
//             email.value
//           )}`;
//         }, 100);
//       } else {
//         errorMessage.style.display = 'flex';
//       }
//     });
//   }
// });

// document.addEventListener('DOMContentLoaded', () => {
//   console.log('DOM fully loaded');

//   const emailConfirmation = document.getElementById('user-email');
//   const userEmail = getQueryParam('email');

//   console.log('User email from URL:', userEmail);
//   console.log('Email confirmation element:', emailConfirmation);

//   if (userEmail && emailConfirmation) {
//     emailConfirmation.textContent = decodeURIComponent(userEmail);
//     console.log(
//       'Updated email confirmation text:',
//       emailConfirmation.textContent
//     );
//   } else {
//     console.warn(
//       'User email not found in URL or user-email element is missing.'
//     );
//   }

//   // Dismiss button functionality
//   const dismissConfirmation = document.getElementById('dismiss');
//   if (dismissConfirmation) {
//     dismissConfirmation.addEventListener('click', () => {
//       setTimeout(() => {
//         window.location.href = 'index.html';
//       }, 1000);
//     });
//   }
// });

// // Function to extract query parameters from URL
// function getQueryParam(param) {
//   const urlParams = new URLSearchParams(window.location.search);
//   return urlParams.get(param);
// }
