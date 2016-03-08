var connect = require('gulp-connect');
var options = require('../config').server;

module.exports = function () {
    connect.server(options);
};