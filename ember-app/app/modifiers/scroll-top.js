import { modifier } from 'ember-modifier';

export default modifier((element, [eventName, handler]) => {
  window.scroll(0, 0);
});
