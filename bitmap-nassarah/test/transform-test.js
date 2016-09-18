'use strict';

const assert = require('assert');
const invertTransform = require('../lib/invert-transform.js');
const grayTransform = require('../lib/gray-transform.js');
const rgbTransform = require('../lib/rgb-transform.js');
const testArray = [55, 40, 25, 5];

// var arrayChunk;

// const bitmapWrite= require('../lib/bitmap-write.js');

// assert.equal(actual, expected[, message])

describe('testing all invert, gray, and rgb transforms', function() {
  describe('testing invert transform', function() {
    it('should return an inverted array', function() {
      var invertedObject = invertTransform(testArray, function(data) {
        console.log('data from invertTransform', data);
        return data;
      });
      // var invertedObject = bitmapWrite(testArray);
      assert.equal(data, '200', 'was not the correct array, returned this:' + invertedObject);
      // assert.equal(invertedObject[0], '200');
    });
  });

  describe('testing gray transform', function() {
    it('should return an array of an average of all indices', function() {
      var grayObject = grayTransform(testArray);
      assert.equal(grayObject[0], '31.25', 'was not correct array, returned this:' + grayObject);
    });
  });

  describe('testing rgb transform', function() {
    it('should return an array with one index multiplied by a constant', function() {
      var rgbObject = rgbTransform(testArray);
      assert.equal(rgbObject[1], '10200', 'was not correct array, returned this:' + rgbObject);
    });
  });
});
