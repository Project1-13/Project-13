
const emailInput = document.querySelector('#email-field'); //targeting the email field of the document 
const passwordInput = document.querySelector('#password-field'); //targeting the password field of the document 
const loginButton = document.querySelector('#login'); //targeting the login button
const rememberButton = document.querySelector('#remember') //targeting the remember me button




loginButton.addEventListener('click', function (event) {
  event.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;

  if (email === '') {
    alert('Email cannot be blank');
  } else if (password === '') {
    alert ('password can not be blank'); //added an password alert
  } else {
    alert("login successful");
    
  
// placing the email and password into local storage
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
   
    // logging the email and password to the console
    console.log(email);
    console.log(password);

    // redirecting to the user page
    window.location.pathname = "/public/user.html";  


  }
});

