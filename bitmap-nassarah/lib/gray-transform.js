'use strict';

module.exports = function grayscaleBitmap(colorArray, callback) {
  for (var i = 0; i < colorArray.length; i += 4) {
    var arrayChunk = colorArray.slice([i], [i+4]);
    var avg = (arrayChunk[0] + arrayChunk[1] + arrayChunk[2] + arrayChunk[3])/4;
    arrayChunk[0] = avg; //blue
    arrayChunk[1] = avg; //green
    arrayChunk[2] = avg; //red
    arrayChunk[3] = avg; //alpha
  }
  callback(arrayChunk);
};
