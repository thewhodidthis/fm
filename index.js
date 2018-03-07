'use strict';

const createVoice = ({ context = new AudioContext(), frequency = 440, ratio = 1, depth = 80 } = {}) => {
  const { currentTime } = context;
  const carrier = { vco: context.createOscillator(), vca: context.createGain() };

  carrier.vco.frequency.setValueAtTime(frequency, currentTime);
  carrier.vco.connect(carrier.vca);

  const modulator = { vco: context.createOscillator(), vca: context.createGain() };

  modulator.vco.frequency.setValueAtTime(frequency * ratio, currentTime);
  modulator.vco.connect(modulator.vca);

  modulator.vca.gain.setValueAtTime(depth, currentTime);
  modulator.vca.connect(carrier.vco.frequency);

  return { carrier, modulator }
};

module.exports = createVoice;
