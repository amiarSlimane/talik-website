import { modifier } from 'ember-modifier';

export default modifier(function scrollTop(element /*, positional, named*/) {
  window.scroll(0, 0);
});
