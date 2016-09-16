'use strict';

module.exports = function GrayscaleBitmap(colorArray) {
  for (var i = 0; i < colorArray.length; i += 4) {
    var arrayChunk = colorArray.slice([i], [i+4]);
    arrayChunk[0] = 150 * arrayChunk[0]; //blue
    arrayChunk[1] = 150 * arrayChunk[1]; //green
    arrayChunk[2] = 150 * arrayChunk[2]; //red
    arrayChunk[3] = 150 * arrayChunk[3]; //alpha
    console.log('arrayChunk', arrayChunk);
  }

};
