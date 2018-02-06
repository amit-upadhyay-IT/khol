'use strict';

var cmd = require('node-cmd');
var check_if_path = require('./lib/check_if_path.js')

module.exports = function(arg) {

    var path_string = arg[0];

    console.log('arg[0]: ', path_string)
    if (check_if_path(arg[0])) {
        cmd.get(
            'nautilus ' + path_string,
            function (err, data, stderr) {
                console.log(data);
            }
        );
    }
}
