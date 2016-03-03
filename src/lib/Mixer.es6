class DerbyshireMixerChannel extends GainNode {
  constructor(ctx, gain = 1) {
    super();
    this.gain = gain;
    this.connect(ctx.destination);
  }
}

class DerbyshireMixerChannelMain extends DerbyshireMixerChannel {
  constructor(ctx) {
    super(ctx);
  }
}

class DerbyshireMixer {
  constructor(ctx, sources) {
    this._ctx = ctx;
    this._out = ctx.destination;
    this._channels = {
      main: new DerbyshireMixerChannelMain(ctx),
    };
  }
}

export { DerbyshireMixer, DerbyshireMixerChannel, DerbyshireMixerChannelMain };
export default DerbyshireMixer;
