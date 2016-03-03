class AudioNode {
  constructor() {
    this.numberOfInputs = 1;
    this.numberOfOutputs = 1;
  }
  connect() {}
  disconnect() {}
}

class AudioSourceNode extends AudioNode {
  constructor() {
    super();
    this.numberOfInputs = 0;
  }
}

class AudioDestinationNode extends AudioNode {
  constructor() {
    super();
    this.numberOfOutputs = 0;
  }
}

class AudioParam {
  cancelScheduledValues() {}
  exponentialRampToValueAtTime() {}
  linearRampToValueAtTime() {}
  setTargetValueAtTime() {}
  setValueAtTime() {}
  setValueCurveAtTime() {}
}

class AudioBufferSourceNode extends AudioSourceNode {
  constructor() {
    super();
  }
}

class MediaElementAudioSourceNode extends AudioSourceNode {
  constructor(mediaElement) {
    super();
    this.mediaElement = mediaElement;
  }
}

class MediaStreamAudioSourceNode extends AudioSourceNode {
  constructor(mediaStream) {
    super();
    this.mediaStream = mediaStream;
    const type = this.mediaStream ?
      (this.mediaStream.constructor || this.mediaStream.name) :
      null;
    if (type !== 'LocalMediaStream') {
      throw new Error('INVALID_STATE_ERR: DOM Exception 11');
    }
  }
}
class OscillatorNode extends AudioSourceNode {}

class ScriptProcessorNode extends AudioNode {
  constructor(bufferSize) {
    super();
    this.bufferSize = bufferSize;
    if (!this.bufferSize) { throw new Error('Not enough arguments'); }
  }
}

class JavaScriptNode extends AudioNode {
  constructor(bufferSize) {
    super();
    this.bufferSize = bufferSize;
    if (!this.bufferSize) { throw new Error('Not enough arguments'); }
  }
}
class AnalyserNode extends AudioNode {}
class GainNode extends AudioNode {
  constructor() {
    super();
    class AudioGain extends AudioParam {}
    this.gain = new AudioGain();
  }
}
class DelayNode extends AudioNode {}
class BiquadFilterNode extends AudioNode {}
class WaveShaperNode extends AudioNode {}
class PannerNode extends AudioNode {}
class ConvolverNode extends AudioNode {}
class ChannelSplitterNode extends AudioNode {}
class ChannelMergerNode extends AudioNode {}
class DynamicsCompressorNode extends AudioNode {}
class WaveTable {}

class AudioListener {
  constructor() {
    this.dopplerFactor = 1;
    this.speedOfSound = 343.3;
  }
}

class AudioBuffer {
  constructor(numberOfChannels, length, sampleRate) {
    this.numberOfChannels = numberOfChannels;
    this.length = length;
    this.sampleRate = sampleRate;
    this.gain = 1;
    this.duration = 0;
  }
}

class AudioContext {
  constructor() {
    this.destination = new AudioDestinationNode();
    this.destination.context = this;
    this.listener = new AudioListener();

    this.activeSourceCount = 0;
    this.sampleRate = 44100;
    this.currentTime = 0;
  }
  createBuffer(channels, length, rate) {
    return new AudioBuffer(channels, length, rate);
  }
  decodeAudioData() {}
  createBufferSource() { return new AudioBufferSourceNode(); }
  createMediaElementSource(mediaElement) {
    return new MediaElementAudioSourceNode(mediaElement);
  }
  createMediaStreamSource() { return new MediaStreamAudioSourceNode(); }
  createOscillator() { return new OscillatorNode(); }
  createScriptProcessor(bufferSize) {
    return new ScriptProcessorNode(bufferSize);
  }
  createAnalyser() { return new AnalyserNode(); }
  createGain() { return new GainNode(); }
  createDelay() { return new DelayNode(); }
  createBiquadFilter() { return new BiquadFilterNode(); }
  createWaveShaper() { return new WaveShaperNode(); }
  createPanner() { return new PannerNode(); }
  createConvolver() { return new ConvolverNode(); }
  createChannelSplitter() { return new ChannelSplitterNode(); }
  createChannelMerger() { return new ChannelMergerNode(); }
  createDynamicsCompressor() { return new DynamicsCompressorNode(); }
  createWaveTable() { return new WaveTable(); }

  // Deprecated methods
  createJavaScriptNode(bufferSize) {
    return new JavaScriptNode(bufferSize);
  }
  createGainNode() { return this.createGain(); }
  createDelayNode() { return this.createDelay(); }
}

if (/PhantomJS/.test(window.navigator.userAgent)) {
  window.AudioContext = AudioContext;
  window.GainNode = GainNode;
}

export default AudioContext;
