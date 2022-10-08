import Modifier from 'ember-modifier';

export default class ScrollAnchorModifier extends Modifier {
  modify(element, [scrollPosition], { relative }) {
    const anchor = window.localStorage.getItem('anchor');
    if (anchor) {
      window.location.hash = '#' + anchor;
    } else {
      window.location.hash = '#home';
    }
  }
}
