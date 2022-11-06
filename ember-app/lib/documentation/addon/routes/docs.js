import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class DocsRoute extends Route {
  @service store;

  model() {
    return {
      name: 'talik',
      githubUrl: 'https://github.io',
      version: '1.0.0',
      navigationIndex: 1,
      modules: [],
    };
    return this.store.findRecord('project', 'talik');
  }
}
