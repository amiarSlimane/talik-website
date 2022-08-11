import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class MapComponent extends Component {
  @service fastboot;

  lat = 43.2937384;
  lng = 5.4455885;
  zoom = 17;
  location = [43.2937384, 5.4455885];
}
