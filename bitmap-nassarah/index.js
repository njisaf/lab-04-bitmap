'use strict';

const fs = require('fs');
const bitmapRead = require('./lib/bitmap-read');
const BitmapConstructor = require('./model/bitmap-constructor');
const bitmapWriter = require('./lib/bitmap-write');


bitmapRead('bitmap.bmp', function(err, data){
  // console.log('Hello team!');
  if (err) console.error('omg error!');
  // console.log('output data', data);
  // console.log('colors', data.toString('hex', 46, 50));
  // var seeBitmap = new BitmapConstructor(data);
  // fs.writeFile('../assets/newbitmap.bmp', data, function(){
  //   console.log('successful write?');
  // });
  // console.log('colorArray', seeBitmap.colorArray);
  // console.log('pixelArray', seeBitmap.pixelArray);
  bitmapWriter(data, function(){
    console.log('bitmapWriter running?');
  });
});
