import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class LinkToScrollComponent extends Component {
  @service router;
  constructor(...args) {
    super(...args);

    // console.log('args route ', this.args.route);
    // console.log('args anchor', this.args.anchor);
  }

  @action
  linkAndScroll(evt) {
    console.log(
      'this.router.location.pathname ',
      this.router.location.location.pathname
    );
    if (this.router.location.location.pathname == '/') {
      window.localStorage.setItem('anchor', this.args.anchor);
      // this.router.transitionTo("index");
    } else {
      evt.preventDefault();
      window.localStorage.setItem('anchor', this.args.anchor);
      this.router.transitionTo('index');
    }
  }
}
