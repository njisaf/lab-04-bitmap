'use strict';

// const fs = require('fs');
const bitmapRead = require('./lib/bitmap-read');

bitmapRead('test.txt', function(err, data){
  console.log('Hello team!');
  if (err) console.error('omg error!');
  console.log('output data', data.toString());
});
