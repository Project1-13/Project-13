// URL's for grabbing each row of images
const pexelsUrl = 'https://api.pexels.com/v1/search?query=tattoos&page=1&per_page=5';
const pexelsUrl2 = 'https://api.pexels.com/v1/search?query=tattoos&page=2&per_page=5';
const pexelsUrl3 = 'https://api.pexels.com/v1/search?query=tattoos&page=8&per_page=5';
const pexelsUrl4 = 'https://api.pexels.com/v1/search?query=tattoos&page=10&per_page=5';
const pexelsUrl5 = 'https://api.pexels.com/v1/search?query=tattoos&page=14&per_page=5';

// Pexel's authorization key
const pexelsKey = 'RWDwRnvBLcUxGbTBoNmTrIEKsTz7VIRWRs28z1xAV1xP0fn4NFk6SWD7';

// locates image containers and creates 'cardTag' for each image
const container6 = document.querySelector('.container6');
const container2 = document.querySelector('.container2');
const container3 = document.querySelector('.container3');
const container4 = document.querySelector('.container4');
const container5 = document.querySelector('.container5');
let cardTag;

// first call function
function getPhotos(images) {
    images.map(image => {
        cardTag = `<div class="card">
                    <img src=${image.src.tiny} />
                    </div>`;
        container6.innerHTML += cardTag;
    })
};

// second call function
function getPhotos2(images) {
    images.map(image => {
        cardTag = `<div class="card">
                    <img src=${image.src.tiny} />
                    </div>`;
        container2.innerHTML += cardTag;
    })
};

// third call function
function getPhotos3(images) {
    images.map(image => {
        cardTag = `<div class="card">
                    <img src=${image.src.tiny} />
                    </div>`;
        container3.innerHTML += cardTag;
    })
};

// fourth call function
function getPhotos4(images) {
    images.map(image => {
        cardTag = `<div class="card">
                    <img src=${image.src.tiny} />
                    </div>`;
        container4.innerHTML += cardTag;
    })
};

// fifth call function
function getPhotos5(images) {
    images.map(image => {
        cardTag = `<div class="card">
                    <img src=${image.src.tiny} />
                    </div>`;
        container5.innerHTML += cardTag;
    })
};

// call 1
fetch(pexelsUrl, {
    headers: {
        Authorization: `${pexelsKey}`
    }
})
    .then(response => {
        return response.json()
    })
    .then(data => {
        getPhotos(data.photos);
    })

// call 2
fetch(pexelsUrl2, {
    headers: {
        Authorization: `${pexelsKey}`
    }
})
    .then(response => {
        return response.json()
    })
    .then(data => {
        getPhotos2(data.photos);
    })

// call 3
fetch(pexelsUrl3, {
    headers: {
        Authorization: `${pexelsKey}`
    }
})
    .then(response => {
        return response.json()
    })
    .then(data => {
        getPhotos3(data.photos);
    })

// call 4
fetch(pexelsUrl4, {
    headers: {
        Authorization: `${pexelsKey}`
    }
})
    .then(response => {
        return response.json()
    })
    .then(data => {
        getPhotos4(data.photos);
    })

// call 5
fetch(pexelsUrl5, {
    headers: {
        Authorization: `${pexelsKey}`
    }
})
    .then(response => {
        return response.json()
    })
    .then(data => {
        getPhotos5(data.photos);
    })
