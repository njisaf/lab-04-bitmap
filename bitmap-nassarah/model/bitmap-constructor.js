'use strict';

const os = require('os');

module.exports = function buildObject(bufferIn, pathName, callback) {
  var bitmapObject = new Bitmap(bufferIn, pathName);
  callback(null, bitmapObject);
};

function Bitmap(buffer, pathName) {
  this.pathName = pathName;
  this.isBitmap = buffer.toString('utf8', 0, 2);
  this.wholeBuffer = buffer;
  this.header = buffer.toString('utf8', 0, 15);
  this.endianness = os.endianness();
  this.fileSize = checkEndian(buffer, 2, 6);
  this.offset = checkEndian(buffer, 10, 14);
  this.colorArray = buffer.slice(54, this.offset);
  this.pixelArray = buffer.slice(this.offset);
}

function checkEndian(buffer, start, finish) {
  if (os.endianness() === 'LE') {
    return buffer.readUInt32LE(start, finish);
  } else if (os.endianness() === 'BE') {
    return buffer.readUInt32BE(start, finish);
  } else {
    console.error('Error!! checkEndian is not functioning');
  }
}
