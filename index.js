'use strict';

var cmd = require('node-cmd');
var check_if_path = require('./lib/check_if_path.js')

module.exports = function(arg) {

    var path_string = arg[0];

    if (typeof path_string === "undefined" || path_string === '&')
    {
        // console.log('path:', path_string);
        cmd.get(
            'nautilus ' + '.',
            function (err, data, stderr) {
                console.log(data);
            }
        );
    }
    else if (check_if_path(arg[0])) {
        cmd.get(
            'nautilus ' + path_string,
            function (err, data, stderr) {
                console.log(data);
            }
        );
    }
}
