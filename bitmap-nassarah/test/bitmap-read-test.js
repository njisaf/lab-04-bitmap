'use strict';

const assert = require('assert');

const bitmapRead = require('../lib/bitmap-read');

describe('testing whether we can read buffer of any file', function() {
  it('should return a buffer', function(done) {
    bitmapRead('test.txt', function(err, result){
      console.log(err);
      var resultString = result.toString();
      assert.equal(resultString, '111\n', 'was not 111');
      done();
    });
  });
});
