import 'should';
import assert from 'assert';
import {
  DerbyshireMixer,
  DerbyshireMixerChannel,
  DerbyshireMixerChannelMain,
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
  const sources = Array();
  const mainChannel = new DerbyshireMixerChannelMain(ctx);
  it('should be a MixerChannelMain Object', () => {
    assert.equal(mainChannel.constructor.name, 'DerbyshireMixerChannelMain');
  });
});
