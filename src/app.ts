console.log('Ionut');

import * as Map from 'esri/Map';
import * as MapView from  'esri/views/MapView';

const myMap = new Map({
    basemap: 'streets'
});

const mapView = new MapView({
    map: myMap,
    container: "viewMap",
    center: [25, 45],
    zoom: 6
});
 
