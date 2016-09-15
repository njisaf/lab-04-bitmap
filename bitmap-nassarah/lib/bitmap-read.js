'use strict';

const fs = require('fs');

module.exports = function bitmapRead(pathName, callback) {
  console.log('bitmap-read running');
  fs.readFile(`${__dirname}/../../assets/${pathName}`, function(err, data) {
    console.log('input data', data);
    if (err) return callback(err);
    callback(null, data);
  });
};
