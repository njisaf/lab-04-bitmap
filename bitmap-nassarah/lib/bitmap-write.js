'use strict';

const fs = require('fs');
const EE = require('events');
const myEE = new EE();

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
    for (var i = 0; i < colorArray.length; i += 4) {
      var arrayChunk = colorArray.slice([i], [i+4]);
      // console.log('value[i]', [i]);
      // for (var j = 0; j < arrayChunk.length; j++) {
        // console.log('value[j]', colorArray[j]);
      arrayChunk[0] = 1; //blue
      arrayChunk[1] = 1; //green
      arrayChunk[2] = 1; //red
      arrayChunk[3] = 0; //alpha
      console.log('arrayChunk', arrayChunk);
      // }
    }
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
