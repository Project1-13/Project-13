const lastEmail = localStorage.getItem('lastEmail')
const appointments = JSON.parse(localStorage.getItem('appointmentArray'))

const gotProfile = JSON.parse(localStorage.getItem(lastEmail))

console.log (gotProfile);

const userNameEl = document.querySelector('#user-name')
userNameEl.textContent = gotProfile.userName;

const userEmailEl = document.querySelector('#user-email')
userEmailEl.textContent = gotProfile.email;

const userPhone = document.querySelector('#user-phone')
userPhone.textContent = gotProfile.phoneNumber;

const userApps = document.querySelector('#user-apps')

appointments.forEach(appointment=> {
    const item = document.createElement('li')
    item.textContent = JSON.stringify(appointment)
    userApps.appendChild(item)
});