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

    // initially writing a dummy object in the file because for each
    // new object to be inserted in the file I need to add a `,` in the beginning
    // thus I am writing a dummy object and for every other object insert
    // I will append a `,` before object
    check_file(filename, short_name, dir_path);
}

// returns true if file is empty, else returns false
function check_file(filename, short_name, dir_path)
{

    fs.readFile(filename, 'UTF-8', function(err, data) {
        if (err)
        {
            // need to add empty object in file
            add_empty_object(filename);
        }
        else
        {
            // continue doint opeation without any addition of dummy object
            save_data(filename, short_name, dir_path);
        }
    });
}

function add_empty_object(filename, short_name, dir_path, username)
{
    // adding an empty object in the file
    fs.writeFile(filename, '{}', function (err) {
        if (err)
            throw err;
        else
            save_data(filename, short_name, dir_path);
    });
}

function save_data(write_filename, short_name, dir_path)
{
    // creating an object where I can insert short_name: dir_path
    var data_obj = {};
    data_obj[short_name] = dir_path;

    // checking if the short_name entered is already present in the cache file or not
    // append into file only if short_name doesn't exists in the file
    check_short_name(short_name, write_filename).then(function(boolval) {
        if (boolval)
        {
            // i.e. short_name already exists
            console.log(short_name+' already exists, kindly chose some different');
        }
        else
        {
            // inserting a , before every insert
            fs.appendFile(write_filename, ','+JSON.stringify(data_obj), function (err) {
                if (err)
                    throw err;
                else
                    console.log('Success write');
            });
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
                 // getting the json object from the data
                // var content = JSON.parse(data);
                var content = data;
                // checing if short_name exists
                if (content.short_name === null)
                    return false;
                else
                    return true;
            }
        })

    });




    /*
    fs.readFile(filename, 'UTF-8', function (err, data) {
        if (err)
            throw err;
        else
        {
            // getting the json object from the data
            // var content = JSON.parse(data);
            var content = data;
            // checing if short_name exists
            if (content.short_name === null)
                return false;
            else
                return true;
        }
    });
    */
}
