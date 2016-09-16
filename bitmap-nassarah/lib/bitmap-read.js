'use strict';

const fs = require('fs');

module.exports = function bitmapRead(pathName, callback) {
  console.log('bitmap-read running');
  fs.readFile(`${__dirname}/../../assets/${pathName}`, function(err, buffer) {
    console.log('input data', buffer);
    if (err) return callback(err);
    callback(null, buffer);
  });
};
