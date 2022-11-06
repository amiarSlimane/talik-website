const path = require('path');

const appRoot = path.join(__dirname, '../../');
const appEntry = path.join(appRoot, 'app');
const adminEngineEntry = path.join(appRoot, 'lib/admin/addon');
const documentationEngineEntry = path.join(appRoot, 'lib/documentation/addon');

const relevantFilesGlob = '**/*.{html,js,ts,hbs,gjs,gts}';

module.exports = {
  content: [
    path.join(appEntry, relevantFilesGlob),
    path.join(adminEngineEntry, relevantFilesGlob),
    path.join(documentationEngineEntry, relevantFilesGlob),
  ],
  darkMode: true,
  theme: {
    extend: {},
  },
  plugins: [],
};
