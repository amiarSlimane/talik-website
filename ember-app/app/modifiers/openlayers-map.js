import { modifier } from 'ember-modifier';

import Map from 'ol/Map';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';


export default modifier(function openlayersMap(
  element /*, positional, named*/
) {


const map = new Map({
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
  ],
  target: 'map',
  view: new View({
    center: [43.2937384, 5.4455885],
    zoom: 14,
  }),
});


});
