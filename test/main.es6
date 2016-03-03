import 'should';
import assert from 'assert';

import AudioContext from './webaudio-mock.es6';
import Derbyshire from '../src/Derbyshire.es6';

describe('Object construction', () => {
  const derbyshire = new Derbyshire();
  it('should set ctx as new AudioContext', () => {
    const name = derbyshire.ctx.constructor.name;
    assert.equal(name, 'AudioContext');
  });
  describe('Output node', () => {
    const out = derbyshire.out;
    it('should set out as new AudioDestinationNode', () => {
      const name = out.constructor.name;
      assert.equal(name, 'AudioDestinationNode');      
    });
  });
});
