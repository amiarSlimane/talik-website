import { modifier } from 'ember-modifier';
import { inject as service } from '@ember/service';

export default modifier((element, [eventName, handler]) => {
  const anchor = window.localStorage.getItem('anchor');
  if (anchor) {
    window.location.hash = '#' + anchor;
  } else {
    window.location.hash = '#home';
  }
});
