const lastEmail = localStorage.getItem('lastEmail');
const appointments = JSON.parse(localStorage.getItem('appointmentArray'));
const container = document.querySelector('.user-apps');

const gotProfile = JSON.parse(localStorage.getItem(lastEmail))

console.log (gotProfile);

const userNameEl = document.querySelector('#user-name')
userNameEl.textContent = gotProfile.userName;

const userEmailEl = document.querySelector('#user-email')
userEmailEl.textContent = gotProfile.email;

const userPhone = document.querySelector('#user-phone')
userPhone.textContent = gotProfile.phoneNumber;

// const userApps = document.querySelector('.user-apps')


if (appointments) {
    const artistInfo = appointments.artist;
    const messageInfo = appointments.message;
    const dateInfo = appointments.date;

    if (artistInfo && messageInfo && dateInfo) {
        const newDiv = document.createElement('div');

        const dateTitle = document.createElement('h3');
        dateTitle.textContent = `Date: ${dateInfo}`;
        newDiv.appendChild(dateTitle);

        const line = document.createElement('hr');
        line.classList.add('newPostLine');
        newDiv.appendChild(line);

        const artistTitle = document.createElement('p');
        artistTitle.textContent = `With ${artistInfo}`;
        newDiv.appendChild(artistTitle);

        const messageTitle = document.createElement('p');
        messageTitle.textContent = `Details: ${messageInfo}`;
        newDiv.appendChild(messageTitle);

        container.appendChild(newDiv);
    }
}