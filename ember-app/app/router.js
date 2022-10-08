import EmberRouter from '@embroider/router';
import config from 'talik/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {

  this.route('index', {path:'/'});
  this.route('demo');
  this.mount('documentation',{path:'/documentation'});
  this.mount('admin',{path:'/admin'});
});
