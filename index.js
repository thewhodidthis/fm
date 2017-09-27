'use strict';

var createVoice = function (audio, base, ratio, pimp) {
  if ( audio === void 0 ) audio = new AudioContext();
  if ( base === void 0 ) base = 440;
  if ( ratio === void 0 ) ratio = 1;
  if ( pimp === void 0 ) pimp = 80;

  var currentTime = audio.currentTime;
  var carrier = { vco: audio.createOscillator(), vca: audio.createGain() };

  carrier.vco.frequency.setValueAtTime(base, currentTime);
  carrier.vco.connect(carrier.vca);

  var modulator = { vco: audio.createOscillator(), vca: audio.createGain() };

  modulator.vco.frequency.setValueAtTime(base * ratio, currentTime);
  modulator.vco.connect(modulator.vca);

  modulator.vca.gain.setValueAtTime(pimp, currentTime);
  modulator.vca.connect(carrier.vco.frequency);

  return { carrier: carrier, modulator: modulator }
};

module.exports = createVoice;

