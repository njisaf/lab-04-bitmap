'use strict';

// const fs = require('fs');
// const bitmapRead = require('../lib/bitmapRead');

module.exports = function BitmapConstructor(buffer) {
  this.header = buffer.toString('utf8', 0, 15);
  this.fileSize = buffer.readUInt32LE(2, 6);
  this.offset = buffer.readUInt32LE(10, 14);
  this.colorArray = buffer.slice(54, this.offset);
  this.pixelArray = buffer.slice(this.offset);
};
