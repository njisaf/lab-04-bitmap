'use strict';


module.exports = function invertBitmap(colorArray) {
  for (var i = 0; i < colorArray.length; i += 4) {
    var arrayChunk = colorArray.slice([i], [i+4]);
    arrayChunk[0] = 255 - arrayChunk[0]; //blue
    arrayChunk[1] = 255 - arrayChunk[1]; //green
    arrayChunk[2] = 255 - arrayChunk[2]; //red
    arrayChunk[3] = 255 - arrayChunk[3]; //alpha
    console.log('arrayChunk', arrayChunk);
  }
  console.log('about to return arrayChunk from invert-transform', arrayChunk);
  // return arrayChunk;
};
