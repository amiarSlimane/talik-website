import buildRoutes from 'ember-engines/routes';

export default buildRoutes(function () {
  // Define your engine's route map here
  this.route('home');

  this.route('docs', function () {
    this.route('api', function () {
      this.route('item', { path: '/*path' });
    });
  });

  // this.route('documentation', { path: '/' });
});
