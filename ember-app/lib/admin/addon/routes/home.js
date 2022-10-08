import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class HomeRoute extends Route {
  @service metrics;
  @service hostRouter;

  constructor() {
    super(...arguments);

    this.hostRouter.on('routeDidChange', () => {
      const page = this.hostRouter.currentURL;
      const title = this.hostRouter.currentRouteName || 'unknown';

      this.metrics.trackPage({ page, title });
    });
  }
}
