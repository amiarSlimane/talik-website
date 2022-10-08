import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'talik/config/environment';
export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;

  engines = {
    admin: {
      dependencies: {
        externalRoutes: {
          index: 'index',
        },
        services: [{ 'host-router': 'router' }, 'metrics'],
      },
    },
    documentation: {
      dependencies: {
        services: [{ 'host-router': 'router' }, 'metrics'],
      },
    },
  };
}

loadInitializers(App, config.modulePrefix);
