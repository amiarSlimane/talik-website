import EmberRouter from '@embroider/router';
import config from 'talik/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('dashboard');
  this.route('admin');
  this.route('demo');
  this.route('documentation');
});
