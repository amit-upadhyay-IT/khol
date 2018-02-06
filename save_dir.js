'use strict';

var fs = require('fs');
var path = require('path');
// for getting the username
var os = require('os');

module.exports = function (arg) {

    // the directory path that I need to save in a file
    var dir_path = arg[0];
    var short_name = arg[1];

    // file name where I will save the path
    // this file should be created only once
    var username = os.userInfo().username;
    var file_name = '/home/'+username+'/.khol_cache1';

    fs.appendFile(file_name, dir_path+','+short_name+'\n', function (err) {
        if (err)
            throw err;
        console.log('data written successfully!');
        save_data(short_name, dir_path, username);
    });

}

function save_data(short_name, dir_path, username)
{
    var write_filename = '/home/'+username+'/.khol_cache2';
    var data_obj = {};
    data_obj[short_name] = dir_path;

    fs.appendFile(write_filename, JSON.stringify(data_obj), function (err) {
        if (err)
            throw err;
        console.log('Success write');
    })
}
