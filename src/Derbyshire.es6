import Mixer from './lib/Mixer.es6';
import SourcesArray from './lib/SourcesArray.es6'

const AudioCtx = window.AudioContext || window.webkitAudioContext;

class Derbyshire {
  constructor() {
    this._ctx = new AudioCtx();
    this._out = this.ctx.destination;
    this._sources = new SourcesArray();
    this.mixer = new Mixer(this.sources, this.out);
    return this;
  }

  get sources() {
    return this._sources;
  }
  get ctx() {
    return this._ctx;
  }
  get out() {
    return this._out;
  }
}

export default Derbyshire;
