import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class ApplicationController extends Controller {

  @service router;

  get isAdmin() {
    const url = this.router.currentURL;
    if (url.includes('/admin')) return true;

    return false;

  }

}
