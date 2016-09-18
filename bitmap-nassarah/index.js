'use strict';

const bitmapReader = require('./lib/bitmap-read');
const bitmapConstructor = require('./model/bitmap-constructor');
const bitmapWriter = require('./lib/bitmap-write');
const programSelect = process.argv[3];
const fileSelect = process.argv[2];


function runProgram(){
  if (!programSelect || !fileSelect) {
    console.error('Error!! Program requires a filename and transform\nUse form \'node index.js filename.bmp transform\' \nThree transforms are available: invert, gray, rgb');
  } else {
    bitmapReader(fileSelect, function(err, buffer){
      if (err) throw console.error('Error! Not a valid file.\nFiles much be in form filename.bmp, and must be in the assets directory.');
      bitmapConstructor(buffer, fileSelect, function(err, object){
        if (err) throw console.error('Error! bitmapConstructor is not receiving a valid buffer object.');
        if (object.isBitmap != 'BM') throw console.error('Error! File does not appear to be a valid bitmap file.');
        bitmapWriter(object, programSelect, function(err, newFilePath){
          console.log('New file saved as ' + newFilePath + ' in assets.');
        });
      });
    });
  }
}

runProgram();
