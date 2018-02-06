#!/usr/bin/env node
'use strict';

var meow = require('meow');
var goto = require('./goto.js');

var cli = meow({
    help: [
        'Usage',
        '    goto <short_name> // this will open the file in GUI method',
        'Example',
        '    goto study  // this will open the directory which is mapped to study',
        '',
        'Developer',
        '    Amit Upadhyay (github.com/amit-upadhyay-it)'
    ].join('\n')
});

// the argument passed below is array, so I will parse it accordingly in the called function
// the first element in the array is likely to be a shortname.
goto(process.argv.slice(2));
