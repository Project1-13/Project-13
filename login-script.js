
const emailInput = document.querySelector('#email-field'); //targeting the email field of the document 
const passwordInput = document.querySelector('#password-field'); //targeting the password field of the document 
const loginButton = document.querySelector('#login'); //targeting the login button
const rememberButton = document.querySelector('#save') //targeting the remember me button

loginButton.addEventListener('click', function (event) {
  event.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;

  if (email === '') {
    alert('Email cannot be blank');
  } else if (password === '') {
    alert ('password can not be blank'); //added an password alert
  } else   {
    const existingUserPassword = localStorage.getItem(email) 
    console.log (existingUserPassword);
    if (!existingUserPassword){
      alert("user not found")
    } else if (existingUserPassword !== password){
      alert("wrong password")
    } else{
      alert("login successful");
       // redirecting to the user page
      window.location.pathname = "/public/user.html";  
    }
       
     
  }
});
// added event listener to the remember button
rememberButton.addEventListener('click', function (event) {
  event.preventDefault();
  // creating a variable to hold the email input
  const remember = emailInput.value 

  // setting the if statement up so that as long as there is something in the email form it will promt
  if (remember !== '') {
    alert('Create New Profile?');

    // redirecting to the profile creation form
    location.href = "./create_profile.html";  

  }

  // alterting error if there is nothing in the email form
  else {
  alert ('error, please try again')
  }


})
