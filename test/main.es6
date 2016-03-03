import 'should';
import 'assert';

import AudioContext from './webaudio-mock.es6';
import Derbyshire from '../src/Derbyshire.es6';

var assert = require('assert');

describe('Array', () => {
  describe('#indexOf()', () => {
    it('should return -1 when the value is not present', () => {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });
});
