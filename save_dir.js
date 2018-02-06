'use strict';

var fs = require('fs');
var path = require('path');
// for getting the username
var os = require('os');



module.exports = function (arg) {

    // the directory path that I need to save in a file
    var dir_path = arg[0];
    var short_name = arg[1];

    // file name where I will save the path is /home/username, so for that
    // I am getting the username of the user
    var username = os.userInfo().username;

    // making the filename
    var filename = '/home/'+username+'/.khol_cache';

    check_file(filename, short_name, dir_path);
}


// checks the file if it exists or not, if it doesn't exists then a new file is created
function check_file(filename, short_name, dir_path)
{

    fs.readFile(filename, 'UTF-8', function(err, data) {
        if (err)
        {
            // need to add empty object in file
            create_the_file(filename, short_name, dir_path);
        }
        else
        {
            // continue doing opeation without any addition of dummy object
            save_data(filename, short_name, dir_path);
        }
    });
}

function create_the_file(filename, short_name, dir_path)
{
    // adding an empty string in the file
    // then calling save_data function
    fs.writeFile(filename, '', function (err) {
        if (err)
            throw err;
        else
            save_data(filename, short_name, dir_path);
    });
}


// save the short_name and dir_path, not in JSON format but in plain string format
// separated by `,`
function save_data(write_filename, short_name, dir_path)
{

    // checking if the short_name entered is already present in the cache file or not
    // append into file only if short_name doesn't exists in the file
    check_short_name(short_name, write_filename).then(function(retval) {

        if (!retval)
        {
            // inserting a , before every insert
            fs.appendFile(write_filename, short_name+','+dir_path+'\n', function (err) {
                if (err)
                    throw err;
                else
                    console.log('Success write');
            });
        }
        else
        {
            // i.e. short_name already exists
            console.log(short_name+' already exists, kindly chose something different');
        }
    });
}

// returns true if short_name exists in the file, else return false
function check_short_name(short_name, filename)
{
    return new Promise(function(resolve, reject) {

        fs.readFile(filename, 'UTF-8', function(err, data) {
            if (err)
            {
                // this should happen unless os is dealing with something really nasty
                throw err;
            }
            else
            {
                // check if file is empty or not
                if (data === '')
                    resolve(false);
                else
                {
                    var flag = false;
                    var content = data;
                    // parse the content of file
                    var lines = content.split('\n');
                    for (var i = 0; i < lines.length; ++i)
                    {
                        var key = lines[i].split(',')[0];
                        if (key == short_name)
                        {
                            flag = true;
                            break;
                        }
                    }

                    if (flag)
                        resolve(true);  // passing true coz, I don't want the same short_name to be added again
                    // no such short_name was found in file, so passing false as arg
                    else
                        resolve(false);

                }
            }
        });
    });
}
