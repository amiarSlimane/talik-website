import EmberRouter from '@embroider/router';
import config from 'casse-autoselection/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('route1');
  this.route('route2');
  this.route('dashboard');
  this.route('admin');
});
