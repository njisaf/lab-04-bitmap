'use strict';

const assert = require('assert');
const bitmapReader = require('../lib/bitmap-read');
const bitmapConstructor = require('../model/bitmap-constructor');

describe('This tests whether bitmap-constructor is outputting a valid bitmap object', function() {
  it('bitmap-constructor should return an object with a property .isBitmap with a value of \'BM\'', function(done){
    bitmapReader('testimage-actuallyjpg.bmp', function(err, buffer){
      bitmapConstructor(buffer, 'testimage-actuallyjpg.bmp', function(err, object){
        console.log('isbitmap?', object.isBitmap);
        var testThis = object.isBitmap;
        console.log('testThis', testThis);
        assert.equal(testThis, 'BM', 'This property should not read BM');
      });
      done();
    });
  });
});
