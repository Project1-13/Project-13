const artistSelection = document.querySelector('#artist-selection');
const phoneNumberInput = document.querySelector('#phone-number');
const firstNameInput = document.querySelector('#first-name');
const lastNameInput = document.querySelector('#last-name');
const emailInput = document.querySelector('#email-input');
const messageInput = document.querySelector('#message-input');
const appointmentDate = document.querySelector('#datepicker');

submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    
    const artist = artistSelection.value;
    // const phoneNumber = phoneNumberInput.value;
    // const firstName = firstNameInput.value;
    // const lastName = lastNameInput.value;
    // const email = emailInput.value;
    const message = messageInput.value;
    const date = appointmentDate.value;
    
    if (artist === 'Choose Artist') {
        alert('Please choose an Artist');
    // } if (phoneNumber === '') {
    //     alert ('Please enter your phone number');
    // } if (firstName === ''){
    //     alert ('Please enter your first name');
    // } if (lastName === '') {
    //     alert ('Please enter your last name');
    // }if (email === '') {
    //     alert ('Please enter your email');
    }if (message === '') {
        alert ('Please write a message');
    }


    
    
    const appointmentArray = [artist, message, date];
    console.log(appointmentArray)

    localStorage.setItem('appointmentArray', JSON.stringify(appointmentArray));

    location.href = "./user.html"; //redirecting to user page

});
