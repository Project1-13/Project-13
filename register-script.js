const emailInput = document.querySelector('#email'); //targeting the email field of the document 
const passwordInput = document.querySelector('#psw'); //targeting the password field of the document 
const passwordRepeat = document.querySelector('#psw-repeat'); //targeting the password field of the document 
const loginButton = document.querySelector('#registerbtn'); //targeting the login button
const rememberButton = document.querySelector('#remember') //targeting the remember me button




loginButton.addEventListener('click', function (event) {
    event.preventDefault();
  
    const email = emailInput.value;
    const password = passwordInput.value;
    const repeat = passwordRepeat.value;
    if (email === '') {
      alert('Email cannot be blank');
    } else if (password === '') {
      alert ('password can not be blank'); //added an password alert
    }  else if (password !== repeat) {
        alert ('passwords must match');
    }  else {
      alert("account created successful");
      
    
  // placing the email and password into local storage
      localStorage.setItem (email,password);
     
     
      // logging the email and password to the console
      console.log(email);
      console.log(password);
  
      // redirecting to the user page
    window.location.pathname = "./public/user.html";  
  
  
    }
  });