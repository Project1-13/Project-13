// grants access to MapBox
mapboxgl.accessToken = 'pk.eyJ1IjoiZ29vZ3VydSIsImEiOiJjbHdqejF3OXcwcXVyMmlwNDZ1NG5qcHc0In0.i44xbqlarplMTsGAHFHDOQ';

// creates Map
const map = new mapboxgl.Map({
    container: 'map', // container ID
    center: [-98.63658746419037, 29.453219811074046], // starting position [lng, lat]
    zoom: 13 // starting zoom
});

// creates Store
const stores = {
    'type': 'FeatureCollection',
    'features': [
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [-98.63658746419037, 29.453219811074046]
            },
            'properties': {
                'phoneFormatted': '(726) 204-4391',
                'phone': '7262044391',
                'address': '7520 Potranco Rd',
                'city': 'San Antonio',
                'country': 'United States',
                'postalCode': '28251',
                'state': 'Texas'
            }
        }
    ]
};

// creates popup on store when clicked
function createPopUp(currentFeature) {
    const popUps = document.getElementsByClassName('mapboxgl-popup');
    /** Check if there is already a popup on the map and if so, remove it */
    if (popUps[0]) popUps[0].remove();
  
    const popup = new mapboxgl.Popup({ closeOnClick: false })
      .setLngLat(currentFeature.geometry.coordinates)
      .setHTML(`<h3>Wicked Needles</h3><h4>${currentFeature.properties.address}</h4>`)
      .addTo(map);
};

// Creates layer for store visual on map
map.on('load', () => {
    map.addLayer({
        id: 'locations',
        type: 'circle',
        source: {
            type: 'geojson',
            data: stores
        }
    });
});

// zooms in on store when clicked
function flyToStore(currentFeature) {
    map.flyTo({
      center: currentFeature.geometry.coordinates,
      zoom: 13
    });
}

// click event that makes flyToStore and createPopUp trigger
map.on('click', (event) => {
    /* Determine if a feature in the "locations" layer exists at that point. */
    const features = map.queryRenderedFeatures(event.point, {
      layers: ['locations']
    });
  
    /* If it does not exist, return */
    if (!features.length) return;
  
    const clickedPoint = features[0];
  
    /* Close all other popups and display popup for clicked store */
    createPopUp(clickedPoint);
  });