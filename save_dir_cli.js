#!/usr/bin/env node
'use strict';

var meow = require('meow');
var save_dir = require('./save_dir.js');

var cli = meow({
    help: [
        'Usage',
        '    khol <file_name or file_path> // this will open the file in GUI method',
        'Example',
        '    khol .  // this will open the current directory',
        '',
        'Developer',
        '    Amit Upadhyay (github.com/amit-upadhyay-it)'
    ].join('\n')
});

// the argument passed below is array, so I will parse it accordingly in the called function
// the first element in the array is likely to be the file path or file name
save_dir(process.argv.slice(2));
