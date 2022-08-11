import { module, test } from 'qunit';
import { setupTest } from 'casse-autoselection/tests/helpers';

module('Unit | Route | dashboard', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:dashboard');
    assert.ok(route);
  });
});
