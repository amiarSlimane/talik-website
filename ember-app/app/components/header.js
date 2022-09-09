import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class HeaderComponent extends Component {

  @tracked hidden=true;
  @action
  toggle(){
    this.hidden = !this.hidden;
    console.log('toggle');
  }
}
