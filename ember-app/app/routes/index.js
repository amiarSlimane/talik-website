import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
  @service metrics;
  @service router;
  @service headData;

  constructor() {
    super(...arguments);

    this.router.on('routeDidChange', () => {
      const page = this.router.currentURL;
      const title = this.router.currentRouteName || 'unknown';

      this.metrics.trackPage({ page, title });
    });
  }


  afterModel() {
    this.headData.title = 'Talik.io home page';
  }
}
