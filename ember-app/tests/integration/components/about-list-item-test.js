import { module, test } from 'qunit';
import { setupRenderingTest } from 'talik/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | about-list-item', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<AboutListItem />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <AboutListItem>
        template block text
      </AboutListItem>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
