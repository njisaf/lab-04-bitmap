'use strict';

const assert = require('assert');
const bitmapConstructor = require('../model/bitmap-constructor');
const testObject = ['not data', 'not a buffer'];

describe('This tests whether bitmap-constructor will output an error if given data that is not a buffer. bitmap-constructor takes three parameters: a buffer object, a filename (which can be any string for the purposes of this test), and a callback.', function() {
  it('bitmap-constructor should return an error message', function(done){
    bitmapConstructor(testObject, 'anystring.test', function(err, object){
      assert.isError('Test should return an error');
    });
    done();
  });
});
