// grants access to MapBox
mapboxgl.accessToken = 'pk.eyJ1IjoiZ29vZ3VydSIsImEiOiJjbHdqejF3OXcwcXVyMmlwNDZ1NG5qcHc0In0.i44xbqlarplMTsGAHFHDOQ';

// creates Map
const map = new mapboxgl.Map({
    container: 'map', // container ID
    center: [-98.49193948203236, 29.425199606692914], // starting position [lng, lat]
    zoom: 9.5, // starting zoom
    scrollZoom: false
});

// creates Store
const stores = {
    'type': 'FeatureCollection',
    'features': [
        {
            'type': 'Feature', //store 1
            'geometry': {
                'type': 'Point',
                'coordinates': [-98.63658746419037, 29.453219811074046]
            },
            'properties': {
                'name': 'Josh',
                'phoneFormatted': '(726) 204-4391',
                'phone': '7262044391',
                'address': '7520 Potranco Rd',
                'city': 'San Antonio',
                'country': 'United States',
                'postalCode': '28251',
                'state': 'Texas'
            }
        },
        {
            'type': 'Feature', //store 2
            'geometry': {
                'type': 'Point',
                'coordinates': [-98.48408263342232, 29.439798805585305]
          },
            'properties': {
                'name': 'Tatiana',
                'phoneFormatted': '(210) 538-8400',
                'phone': '2105388400',
                'address': '1119 Camden Street',
                'city': 'San Antonio',
                'country': 'United States',
                'postalCode': '78215',
                'state': 'Texas'
          }
        },
        {
            'type': 'Feature', //store 3
            'geometry': {
                'type': 'Point',
                'coordinates': [-98.61653977288123, 29.294127779147015]
          },
            'properties': {
                'name': 'William',
                'phoneFormatted': '(210) 623-6737',
                'phone': '2106236737',
                'address': '5706 Coleman Way',
                'city': 'Van Ormy',
                'country': 'United States',
                'postalCode': '78073',
                'state': 'Texas'
          }
        },
        {
            'type': 'Feature', //store 4
            'geometry': {
                'type': 'Point',
                'coordinates': [-98.38613129822211, 29.311319492534093]
          },
            'properties': {
                'name': 'Miranda',
                'phoneFormatted': '(210) 467-9178',
                'phone': '2104679178',
                'address': '10842 Green Lake Street',
                'city': 'San Antonio',
                'country': 'United States',
                'postalCode': '78223',
                'state': 'Texas'
          }
        },
        {
            'type': 'Feature', //store 5
            'geometry': {
                'type': 'Point',
                'coordinates': [-98.23983222743068, 29.57384332745525]
          },
            'properties': {
                'name': 'Adam',
                'phoneFormatted': '(210) 300-2700',
                'phone': '2103002700',
                'address': '885 Cibilo Valley Drive',
                'city': 'Cibilo',
                'country': 'United States',
                'postalCode': '78108',
                'state': 'Texas'
          }
        }
    ]
};

/* Assign a unique ID to each store */
stores.features.forEach(function (store, i) {
    store.properties.id = i;
  });

  map.on('load', () => {
    map.addSource('places', {
      type: 'geojson',
      data: stores
    });
    map.addLayer( {
      id: 'locations',
      type: 'circle',
      source: {
        type: 'geojson',
        data: stores
      }
    });
    addMarkers();
    buildLocationList(stores);
  });



  function addMarkers() {
    /* For each feature in the GeoJSON object above: */
    for (const marker of stores.features) {
      /* Create a div element for the marker. */
      const el = document.createElement('div');
      /* Assign a unique `id` to the marker. */
      el.id = `marker-${marker.properties.id}`;
      /* Assign the `marker` class to each marker for styling. */
      el.className = 'marker';
  
      /**
       * Create a marker using the div element
       * defined above and add it to the map.
       **/
      new mapboxgl.Marker(el, { offset: [0, 0] })
        .setLngLat(marker.geometry.coordinates)
        .addTo(map);

        el.addEventListener('click', (e) => {
          /* Fly to the point */
          flyToStore(marker);
          /* Close all other popups and display popup for clicked store */
          createPopUp(marker);
          /* Highlight listing in sidebar */
          const activeItem = document.getElementsByClassName('active');
          e.stopPropagation();
          if (activeItem[0]) {
            activeItem[0].classList.remove('active');
          }
          const listing = document.getElementById(`listing-${marker.properties.id}`);
          listing.classList.add('active');
        });
    }
  }

  function buildLocationList(stores) {
    for (const store of stores.features) {
      /* Add a new listing section to the sidebar. */
      const listings = document.getElementById('listings');
      const listing = listings.appendChild(document.createElement('div'));
      /* Assign a unique `id` to the listing. */
      listing.id = `listing-${store.properties.id}`;
      /* Assign the `item` class to each listing for styling. */
      listing.className = 'item';
  
      /* Add the link to the individual listing created above. */
      const link = listing.appendChild(document.createElement('a'));
      link.href = '#';
      link.className = 'title';
      link.id = `link-${store.properties.id}`;
      link.innerHTML = `${store.properties.name}`;
  
      /* Add details to the individual listing. */
      const details = listing.appendChild(document.createElement('div'));
      details.innerHTML = `${store.properties.address}<br>${store.properties.city}`;
      if (store.properties.phone) {
        details.innerHTML += ` &middot; ${store.properties.phoneFormatted}`;
      }
      link.addEventListener('click', function () {
        for (const feature of stores.features) {
          if (this.id === `link-${feature.properties.id}`) {
            flyToStore(feature);
            createPopUp(feature);
          }
        }
        const activeItem = document.getElementsByClassName('active');
        if (activeItem[0]) {
          activeItem[0].classList.remove('active');
        }
        this.parentNode.classList.add('active');
      });
    }
  }

  function flyToStore(currentFeature) {
    map.flyTo({
      center: currentFeature.geometry.coordinates,
      zoom: 13
    });
  }
  
  function createPopUp(currentFeature) {
    const popUps = document.getElementsByClassName('mapboxgl-popup');
    /** Check if there is already a popup on the map and if so, remove it */
    if (popUps[0]) popUps[0].remove();
  
    const popup = new mapboxgl.Popup({ closeOnClick: false })
      .setLngLat(currentFeature.geometry.coordinates)
      .setHTML(`<h3>${currentFeature.properties.name}</h3><h4>${currentFeature.properties.address}</h4>`)
      .addTo(map);
  }