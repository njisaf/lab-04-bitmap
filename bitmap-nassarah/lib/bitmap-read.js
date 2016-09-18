'use strict';

const fs = require('fs');

module.exports = function bitmapRead(pathName, callback) {
  fs.readFile(`${__dirname}/../../assets/${pathName}`, function(err, buffer) {
    if (err) return callback(err);
    callback(null, buffer);
  });
};
