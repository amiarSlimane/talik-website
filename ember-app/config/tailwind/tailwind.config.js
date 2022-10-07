const path = require('path');

const appRoot = path.join(__dirname, '../../');
const appEntry = path.join(appRoot, 'app');
const relevantFilesGlob = '**/*.{html,js,ts,hbs,gjs,gts}';
const adminEngineEntry = path.join(appRoot, 'lib/admin/addon');

module.exports = {
  content: [
    path.join(appEntry, relevantFilesGlob),
    path.join(adminEngineEntry, relevantFilesGlob),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
