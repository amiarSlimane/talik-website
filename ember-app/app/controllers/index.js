import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class IndexController extends Controller {
  // queryParams = ['anchor'];

  // @service router;
  // @service fastboot;
  // anchor = 'home';

  // init() {
  //   super.init(...arguments);
  //   this.addObserver('anchor', this, 'anchorChanged');
  //   console.log('anchor ', this.anchor);
  // }

  // anchorChanged() {
  //   if (!this.fastboot.isFastBoot) {
  //     window.localStorage.setItem('anchor', this.anchor);
  //   }
  // }

  // get scrollTo() {
  //   if (!this.fastboot.isFastBoot) {
  //     window.location.hash = '#' + this.anchor;
  //   }
  // }
}
