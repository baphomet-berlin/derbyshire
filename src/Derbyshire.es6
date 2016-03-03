const AudioCtx = window.AudioContext || window.webkitAudioContext;

class Derbyshire {
  constructor() {
    this._ctx = new AudioCtx();
    this._out = this.ctx.destination;
    return this;
  }

  get ctx() {
    return this._ctx;
  }
  get out() {
    return this._out;
  }
}
export default Derbyshire;
