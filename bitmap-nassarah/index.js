'use strict';

const bitmapReader = require('./lib/bitmap-read');
const bitmapConstructor = require('./model/bitmap-constructor');
const bitmapWriter = require('./lib/bitmap-write');
const programSelect = process.argv[3];
const fileSelect = process.argv[2];

bitmapReader(fileSelect, function(err, buffer){
  if (err) console.error('bitmapRead error!');
  bitmapConstructor(buffer, fileSelect, function(err, object){
    if (err) console.error('BitmapConstructor error!'); //will get error here??
    bitmapWriter(object, programSelect, function(err, newFilePath){
      console.log('New file saved as ' + newFilePath + ' in assets.');
    });
  });
});



// console.log('output data', data);
// console.log('colors', data.toString('hex', 46, 50));
// var seeBitmap = new BitmapConstructor(data);
// fs.writeFile('../assets/newbitmap.bmp', data, function(){
//   console.log('successful write?');
// });
// console.log('colorArray', seeBitmap.colorArray);
// console.log('pixelArray', seeBitmap.pixelArray);
