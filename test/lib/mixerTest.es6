import 'should';
import assert from 'assert';
import {
  DerbyshireMixer,
  DerbyshireMixerChannel,
  DerbyshireMixerChannelMain,
  DerbyshireMixerChannelTrack,
} from '../../src/lib/Mixer.es6';

const AudioCtx = window.AudioContext || window.webkitAudioContext || null;

describe('Object construction: Mixer', () => {
  const ctx = new AudioCtx();
  const sources = Array();
  const mixer = new DerbyshireMixer(ctx, sources);
  it('should be a Mixer Object', () => {
    assert.equal(mixer.constructor.name, 'DerbyshireMixer');
  });
});

describe('Object construction: MixerChannel', () => {
  const ctx = new AudioCtx();
  const channel = new DerbyshireMixerChannel(ctx);
  it('should be a MixerChannel Object', () => {
    assert.equal(channel.constructor.name, 'DerbyshireMixerChannel');
  });
});

describe('Object construction: MixerChannelMain', () => {
  const ctx = new AudioCtx();
  const channel = new DerbyshireMixerChannelMain(ctx);
  it('should be a MixerChannelMain Object', () => {
    assert.equal(channel.constructor.name, 'DerbyshireMixerChannelMain');
  });
});

describe('Object construction: MixerChannelTrack', () => {
  const ctx = new AudioCtx();
  const oscillator = ctx.createOscillator();
  oscillator.frequency.value = 1000;
  oscillator.start(0);
  const channel = new DerbyshireMixerChannelTrack(ctx, oscillator);
  it('should be a MixerChannelMain Object', () => {
    assert.equal(channel.constructor.name, 'DerbyshireMixerChannelTrack');
    oscillator.stop()
  });
});