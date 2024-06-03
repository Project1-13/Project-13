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
    const message = messageInput.value;
    const date = appointmentDate.value;
    
    if (artist === 'Choose Artist') {
        alert('Please choose an Artist');
    } else if (message === '') {
        alert ('Please write a message');
    } else if (date === ''){
        alert ('Please select date')
    } else {
    alert ('Submission Successful');
    const appointmentArray = [artist, message, date];
    console.log(appointmentArray)

    localStorage.setItem('appointmentArray', JSON.stringify(appointmentArray));

    location.href = "./user.html"; //redirecting to user page
    }

});
