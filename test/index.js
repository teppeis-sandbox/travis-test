'use strict';

const assert = require('assert');
const sut = require('../');

describe('test', () => {
  it('foo', () => {
    assert.equal(sut(), 'foo!');
  });
});
