const emailInput = document.querySelector('#email'); //targeting the email field of the document 
const passwordInput = document.querySelector('#psw'); //targeting the password field of the document 
const passwordRepeat = document.querySelector('#psw-repeat'); //targeting the password field of the document 
const loginButton = document.querySelector('#registerbtn'); //targeting the login button
const rememberButton = document.querySelector('#remember') //targeting the remember me button
const phoneInput= document.querySelector('#phoneNumber') //targeting the phone number field 
const userInput = document.querySelector('#userName') //targeting the user name field


loginButton.addEventListener('click', function (event) {
    event.preventDefault();
  
    const userName = userInput.value;
    const phoneNumber = phoneInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const repeat = passwordRepeat.value;
    if (email === '') {
      alert('Email cannot be blank');
    } else if (password === '') {
      alert ('password can not be blank'); //added an password alert
    } else if (password !== repeat) {
      alert ('passwords must match');
    } else if (phoneNumber ==='') {
      alert ('phone number cannot be blank');
    } else if (userName ==='') {
      alert ('user name cannot be blank')
    } else {
      alert("account created successfully!");
      
    
  // placing the email and password into local storage
      const profile = {
        email:email,
        phoneNumber:phoneNumber,
        userName:userName,
        password:password,
      }

      localStorage.setItem (email,JSON.stringify(profile));
      
      localStorage.setItem('lastEmail',email);
     
      // logging the email and password to the console
     // console.log(email);
     
  
      // redirecting to the user page
      location.href = "./user.html";  
  
  
    }
  });