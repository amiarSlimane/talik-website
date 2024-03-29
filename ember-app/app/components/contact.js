import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ContactComponent extends Component {
   @service notifications;

  @action
  submit(evt) {
    evt.preventDefault();
    // this.euiToaster.show({
    //   title: `Not yet implemented`,
    //   body: 'Please use the email address instead, waiting for this feature to be ready',
    //   color: 'warning',
    //   iconType: 'clock',
    //   toastLifeTimeMs: 15000,
    // });
    this.notifications.error('Please use the email address instead, waiting for this feature to be ready',{
      autoClear: true,
      clearDuration: 5000,
    });
  }
}
