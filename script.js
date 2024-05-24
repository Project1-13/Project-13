
const emailInput = document.querySelector('#email-field'); //targeting the email field of the document 
const passwordInput = document.querySelector('#password-field'); //targeting the password field of the document 
const loginButton = document.querySelector('#login'); //targeting the login button
const rememberButton = document.querySelector('#remember') //targeting the remember me button


loginButton.addEventListener('click', function (event) {
  event.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;

  if (email === '') {
    displayMessage('error', 'Email cannot be blank');
  } else if (password === '') {
    displayMessage('error', 'Password cannot be blank');
  } else {
    displayMessage('success', 'Registered successfully');

    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
   
  }
});