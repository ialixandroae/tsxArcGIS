import * as Map from 'esri/Map';
import * as MapView from  'esri/views/MapView';

export class _Map {
    basemap: string;
    container: string;
    
    constructor(basemap: string, container: string) {
        this.basemap = basemap;
        this.container = container;
    }

    createMap(){
        const myMap = new Map({
            basemap: this.basemap
        });

        const mapView = new MapView({
            map: myMap,
            container: this.container,
            center: [-118, 33.5],
            zoom: 8
        });
        return mapView;
    }
}




 
