import Component from '@glimmer/component';
import { action } from '@ember/object';
import {inject as service} from '@ember/service';

export default class LinkToScrollComponent extends Component {

  @service router;
  constructor(...args){
    super(...args);

    // console.log('args route ', this.args.route);
    // console.log('args anchor', this.args.anchor);
  }

  @action
  linkAndScroll(evt){
    //evt.preventDefault();
    window.localStorage.setItem('anchor', this.args.anchor);
    this.router.transitionTo("index");
    // if(this.router.location.rootURL =='/'){
    // console.log('anchor.....', this.args.anchor);
    // window.location.hash = '#' + this.args.anchor;
    // }

  }
}
