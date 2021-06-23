'use strict';
const auth = require('../middleware/authentication');

module.exports = (app) => {
    app.all('/*', 
    auth.authenticate,
    require('./users'))
}