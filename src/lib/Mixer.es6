class DerbyshireMixerChannel {
  constructor(ctx) {
    this._gain = ctx.createGain();
    this._gain.connect(ctx.destination);
  }
}

class DerbyshireMixerChannelMain extends DerbyshireMixerChannel {
  constructor(ctx) {
    super(ctx);
  }
}

class DerbyshireMixerChannelTrack extends DerbyshireMixerChannel {
  constructor(ctx, node) {
    super(ctx);
    node.connect(this._gain);
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

export { 
  DerbyshireMixer, 
  DerbyshireMixerChannel, 
  DerbyshireMixerChannelMain,
  DerbyshireMixerChannelTrack
};
export default DerbyshireMixer;
