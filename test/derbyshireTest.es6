import 'should';
import assert from 'assert';
import Derbyshire from '../src/Derbyshire.es6';

describe('Object construction', () => {
  const derbyshire = new Derbyshire();
  it('should be a Derbyshire Object', () => {
    assert.equal(derbyshire.ctx.constructor.name, 'AudioContext');
  });
  describe('Context (this.ctx)', () => {
    it('should be new AudioContext', () => {
      assert.equal(derbyshire.ctx.constructor.name, 'AudioContext');
    });
    it('should not be writeable', () => {
      assert.throws(() => derbyshire.sources = 'nope');
    });
  });
  describe('Output node (this.out)', () => {
    it('should be new AudioDestinationNode', () => {
      const name = derbyshire.out.constructor.name;
      assert.equal(name, 'AudioDestinationNode');
    });
    it('should share context of this.ctx', () => {
      assert.equal(derbyshire.out.context, derbyshire.ctx);
    });
    it('should not be writeable', () => {
      assert.throws(() => derbyshire.out = 'nope');
    });
  });
  describe('Mixer (this.mixer)', () => {
    it('should be new Mixer', () => {
      assert.equal(derbyshire.mixer.constructor.name, 'DerbyshireMixer');
    });
  });
  describe('Sources array (this.sources)', () => {
    it('should be new Array', () => {
      assert.equal(derbyshire.sources.constructor.name, 'Array');
    });
    it('should not be writeable', () => {
      assert.throws(() => derbyshire.sources = 'nope');
    });
  });
});
