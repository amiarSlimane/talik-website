import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class ApplicationController extends Controller {
  @service router;
  @service fastboot;

  constructor(...args){
    super(...args);
    if(!this.fastboot.isFastBoot)
    window.localStorage.removeItem('anchor')
  }
  get isAdmin() {
    const url = this.router.currentURL;
    if (url.includes('/admin')) return true;

    return false;
  }
}
