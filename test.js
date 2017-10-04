'use strict'

window.AudioContext = window.AudioContext || window.webkitAudioContext

const kpow = require('kpow')
const test = require('tape')
const createSynth = require('./')

kpow()

test('will default', (t) => {
  const { carrier, modulator } = createSynth()

  t.ok(carrier.hasOwnProperty('vco'))
  t.ok(carrier.vco instanceof OscillatorNode)

  t.ok(carrier.hasOwnProperty('vca'))
  t.ok(carrier.vca instanceof GainNode)

  t.ok(modulator.hasOwnProperty('vco'))
  t.ok(modulator.vco instanceof OscillatorNode)

  t.ok(modulator.hasOwnProperty('vca'))
  t.ok(modulator.vca instanceof GainNode)

  t.end()
})
