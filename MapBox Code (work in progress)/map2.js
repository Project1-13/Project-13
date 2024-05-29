// grants access to MapBox
mapboxgl.accessToken = 'pk.eyJ1IjoiZ29vZ3VydSIsImEiOiJjbHdqejF3OXcwcXVyMmlwNDZ1NG5qcHc0In0.i44xbqlarplMTsGAHFHDOQ';

// creates Map
const map = new mapboxgl.Map({
    container: 'map', // container ID
    center: [-98.49193948203236, 29.425199606692914], // starting position [lng, lat]
    zoom: 10.5 // starting zoom
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

/* Assign a unique ID to each store */
stores.features.forEach(function (store, i) {
    store.properties.id = i;
  });

  map.on('load', () => {
    /* Add the data to your map as a layer */
    map.addLayer({
      id: 'locations',
      type: 'circle',
      /* Add a GeoJSON source containing place coordinates and information. */
      source: {
        type: 'geojson',
        data: stores
      }
    });
  });