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
    if (colorArray[0] === undefined) colorArray = object.pixelArray;
    myEE.emit('second');
  });

  myEE.on('second', function(){
    if (programSelect === 'invert') {
      invertTransform(colorArray, function(){});
    } else if (programSelect === 'gray') {
      grayTransform(colorArray, function(){});
    } else if (programSelect === 'rgb') {
      rgbTransform(colorArray, function(){});
    } else {
      console.error('Error! Transform if/else statement running to end');
    }
    myEE.emit('third');
  });

  myEE.on('third', function(){
    var newPathName = `new${pathName}`;
    fs.writeFile(`../assets/new${pathName}`, buffer, function() {
      callback(null, newPathName);
    });
  });
  myEE.emit('first');
};
