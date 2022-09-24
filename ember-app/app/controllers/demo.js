import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class DemoController extends Controller {
  @service fastboot;

  @tracked render = false;

  constructor(...args) {
    super(...args);
  }
  init() {
    super.init(...arguments);
    // this.addObserver('fastboot', this, 'changed');
    // console.log('fastboot.isFastBoot ', this.fastboot.isFastBoot);
    // console.log('render ', this.render);

    if (!this.fastboot.isFastBoot) {
      this.render = true;
    }
  }

  // changed() {

  //   console.log('fastboot.isFastBoot ', this.fastboot.isFastBoot);
  //   if(this.fastboot.isFastBoot){
  //     this.render = true;
  //   }
  // }
}
