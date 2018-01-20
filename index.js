'use strict';

var createVoice = function (ref) {
  if ( ref === void 0 ) ref = {};
  var context = ref.context; if ( context === void 0 ) context = new AudioContext();
  var frequency = ref.frequency; if ( frequency === void 0 ) frequency = 440;
  var ratio = ref.ratio; if ( ratio === void 0 ) ratio = 1;
  var depth = ref.depth; if ( depth === void 0 ) depth = 80;

  var currentTime = context.currentTime;
  var carrier = { vco: context.createOscillator(), vca: context.createGain() };

  carrier.vco.frequency.setValueAtTime(frequency, currentTime);
  carrier.vco.connect(carrier.vca);

  var modulator = { vco: context.createOscillator(), vca: context.createGain() };

  modulator.vco.frequency.setValueAtTime(frequency * ratio, currentTime);
  modulator.vco.connect(modulator.vca);

  modulator.vca.gain.setValueAtTime(depth, currentTime);
  modulator.vca.connect(carrier.vco.frequency);

  return { carrier: carrier, modulator: modulator }
};

module.exports = createVoice;

