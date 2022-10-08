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
    this.headData.title = 'Talik.io comments integration platform';
    this.headData.keywords = "talik comment integration platform opensource free easy ";
    this.headData.language = 'English';
    this.headData.description = 'Talik is an open source platform that provides an easy and efficient way to integrate comments on your web pages, and allow people to ask questions or give feedback. ';
    this.headData.ogImage = 'https://talik.io/assets/images/header-image.svg';
    this.headData.ogDescription = 'Talik is an open source platform that provides an easy and efficient way to integrate comments on your web pages, and allow people to ask questions or give feedback.';
    this.headData.ogType = 'website';
    this.headData.ogUrl = 'https://talik.io';

  }
}
