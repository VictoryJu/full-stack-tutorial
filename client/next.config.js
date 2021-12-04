const path = require('path');

module.exports = {
  sassOptions: {
    includes: [path.resolve(__dirname, './pages')],
  },
}