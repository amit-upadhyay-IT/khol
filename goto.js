'use strict';

var fs = require('fs');
// for getting the username
var os = require('os');
var cmd = require('node-cmd');



module.exports = function (arg) {

    // first arg is likely to be the short_name
    var short_name = arg[0];

    // file name where I will save the path is /home/username, so for that
    // I am getting the username of the user
    var username = os.userInfo().username;

    // making the filename
    var filename = '/home/'+username+'/.khol_cache';

    check_file(filename, short_name);
}


// checks the file if it exists or not, if it doesn't exists then a new file is created
function check_file(filename, short_name)
{

    fs.readFile(filename, 'UTF-8', function(err, data) {
        if (err)
        {
            // since, the file doesn't exists, so console log a error message
            console.log('There are not short name given by you, kindly type "$ savedir --help" for more info.');
        }
        else
        {
            // continue doing opeation
            get_data(filename, short_name);
        }
    });
}


// get the flie path by checking the short_name
function get_data(filename, short_name)
{
    fs.readFile(filename, 'UTF-8', function(err, data) {
        if (err)
        {
            // this should happen unless os is dealing with something really nasty
            throw err;
        }
        else
        {
            // assuming the content in the file is apt
            var flag = false;
            var content = data;
            // parse the content of file
            var lines = content.split('\n');

            var file_path = '';
            for (var i = 0; i < lines.length; ++i)
            {
                var arr = lines[i].split(',');
                var key = arr[0];
                if (key == short_name)
                {
                    file_path = arr[1];
                    flag = true;
                    break;
                }
            }

            if (flag)
                perform_operation(file_path);
            else
            {
                // no such short_name was found in file
                console.log(short_name+' doesn\'t exists');
            }
        }
    });
}

function perform_operation(file_path)
{
    cmd.get(
        'nautilus '+file_path,
        function(err, data, stderr) {
            if (err)
                throw err
            else
            {
                console.log('changed directory to:', file_path);
            }
        }
    );
}
