import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class ContactComponent extends Component {
  @action
  submit(evt) {
    evt.preventDefault();
  }
}
