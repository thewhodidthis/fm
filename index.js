'use strict';

var createSynth = function (audio, base, ratio, pimp) {
  if ( audio === void 0 ) audio = new AudioContext();
  if ( base === void 0 ) base = 440;
  if ( ratio === void 0 ) ratio = 1;
  if ( pimp === void 0 ) pimp = 80;

  var carrier = { vco: audio.createOscillator(), vca: audio.createGain() };

  carrier.vco.start();
  carrier.vco.frequency.setValueAtTime(base, audio.currentTime);
  carrier.vco.connect(carrier.vca);

  var modulator = { vco: audio.createOscillator(), vca: audio.createGain() };

  modulator.vco.start();
  modulator.vco.frequency.setValueAtTime(base * ratio, audio.currentTime);
  modulator.vco.connect(modulator.vca);

  modulator.vca.gain.setValueAtTime(pimp, audio.currentTime);
  modulator.vca.connect(carrier.vco.frequency);

  return { carrier: carrier, modulator: modulator }
};

module.exports = createSynth;

