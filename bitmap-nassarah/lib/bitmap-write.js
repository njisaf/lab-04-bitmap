'use strict';

const fs = require('fs');
const EE = require('events');
const myEE = new EE();

const invertTransform = require('./invert-transform.js');
const grayTransform = require('./gray-transform.js');
const rgbTransform = require('./rgb-transform.js');

module.exports = function bitmapWriter(object, programSelect, callback) {
  var colorArray = object.colorArray;
  var pathName = object.pathName;
  var buffer = object.wholeBuffer;

  myEE.on('first', function(){
    if (programSelect === 'invert') {
      invertTransform(colorArray, function(){});
    } else if (programSelect === 'gray') {
      grayTransform(colorArray, function(){});
    } else if (programSelect === 'rgb') {
      rgbTransform(colorArray, function(){});
    } else {
      console.error('Command line transform option not entered');
    }
    myEE.emit('second');
  });

  myEE.on('second', function(){
    var newPathName = `new${pathName}`;
    fs.writeFile(`../assets/new${pathName}`, buffer, function() {
      callback(null, newPathName);
    });
  });
  myEE.emit('first');
};
