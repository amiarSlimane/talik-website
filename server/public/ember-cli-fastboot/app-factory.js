define('~fastboot/app-factory', ['casse-autoselection/app', 'casse-autoselection/config/environment'], function(App, config) {
  App = App['default'];
  config = config['default'];

  return {
    'default': function() {
      return App.create(config.APP);
    }
  };
});
