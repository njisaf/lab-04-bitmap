'use strict';

// const fs = require('fs');
const bitmapRead = require('./lib/bitmap-read');
const BitmapConstructor = require('./model/bitmap-constructor');


bitmapRead('test.txt', function(err, data){
  console.log('Hello team!');
  if (err) console.error('omg error!');
  console.log('output data', data);
  var seeBitmap = new BitmapConstructor(data);
  console.log('seeBitmap', seeBitmap);
});
