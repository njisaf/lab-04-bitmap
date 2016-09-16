'use strict';

const fs = require('fs');
const EE = require('events');
const myEE = new EE();

// const transform = require('../lib/color-constructor.js');
// const gray = require('../lib/gray-constructor.js');
const rgbTransform = require('./rgb-transform.js');

module.exports = function bitmapWriter(buffer) {
  console.log('writer running');
  var colorArray;

  myEE.on('first', function(){
    console.log('first writer');
    colorArray = buffer.slice(54, 1078);
    myEE.emit('second');
  });

  myEE.on('second', function(){
    console.log('second writer');
    // transform(colorArray);
    // gray(colorArray);
    rgbTransform(colorArray);

    // for (var i = 0; i < colorArray.length; i += 4) {
    //   var arrayChunk = colorArray.slice([i], [i+4]);
    //   // console.log('value[i]', [i]);
    //   // for (var j = 0; j < arrayChunk.length; j++) {
    //     // console.log('value[j]', colorArray[j]);
    //   arrayChunk[0] = 255 - arrayChunk[0]; //blue
    //   arrayChunk[1] = 255 - arrayChunk[1]; //green
    //   arrayChunk[2] = 255 - arrayChunk[2]; //red
    //   arrayChunk[3] = 255 - arrayChunk[3]; //alpha
    //   console.log('arrayChunk', arrayChunk);
    //   // }
    // }
    myEE.emit('third');
  });

  myEE.on('third', function(){
    console.log('third writer');
    fs.writeFile('../assets/newbitmap.bmp', buffer, function(){
      console.log('successful write?', colorArray);
      console.log('colorArray.length', colorArray.length);
    });
  });
  myEE.emit('first');
};
