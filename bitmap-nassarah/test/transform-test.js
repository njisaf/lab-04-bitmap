'use strict';

const assert = require('assert');
const invertTransform = require('../lib/invert-transform.js');
const grayTransform = require('../lib/gray-transform.js');
const rgbTransform = require('../lib/rgb-transform.js');
const testArray = [55, 40, 25, 5];

describe('testing all invert, gray, and rgb transforms', function() {
  describe('testing invert transform', function() {
    it('should return an inverted array', function() {
      invertTransform(testArray, function(data) {
        console.log('data from invertTransform', data);
        assert.equal(data[0], '200', 'was not correct array, returned this:' + data);
      });
    });
  });

  describe('testing gray transform', function() {
    it('should return an array of an average of all indices', function() {
      grayTransform(testArray, function(data){
        assert.equal(data[0], '31.25', 'was not correct array, returned this:' + data);
      });
    });
  });

  describe('testing rgb transform', function() {
    it('should return an array with one index multiplied by a constant', function() {
      rgbTransform(testArray, function(data) {
        assert.equal(data[1], '10200', 'was not correct array, returned this:' + data);
      });
    });
  });
});
