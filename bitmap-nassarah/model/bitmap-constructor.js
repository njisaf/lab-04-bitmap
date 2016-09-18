'use strict';

// const fs = require('fs');
// const bitmapRead = require('../lib/bitmapRead');

module.exports = function buildObject(bufferIn, pathName, callback) {
  var bitmapObject = new Bitmap(bufferIn, pathName);
  callback(null, bitmapObject);
};

function Bitmap(buffer, pathName) {
  this.pathName = pathName;
  this.isBitmap = buffer.toString('utf8', 0, 2);
  this.wholeBuffer = buffer;
  this.header = buffer.toString('utf8', 0, 15);
  this.fileSize = buffer.readUInt32LE(2, 6);
  this.offset = buffer.readUInt32LE(10, 14);
  this.colorArray = buffer.slice(54, this.offset);
  this.pixelArray = buffer.slice(this.offset);
}
