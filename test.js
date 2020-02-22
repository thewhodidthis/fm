import 'cutaway'
import { assert, report } from 'tapeless'
import createSynth from './index.mjs'

window.AudioContext = window.AudioContext || window.webkitAudioContext

const { ok } = assert
const { carrier, modulator } = createSynth()

ok
  .describe('features a carrier vco', 'will default')
  .test(Object.prototype.hasOwnProperty.call(carrier, 'vco'))
  .describe('which is an OscillatorNode')
  .test(carrier.vco instanceof OscillatorNode)
  .describe('features a carrier vca')
  .test(Object.prototype.hasOwnProperty.call(carrier, 'vca'))
  .describe('which is a GainNode')
  .test(carrier.vca instanceof GainNode)
  .describe('features a modulator vco')
  .test(Object.prototype.hasOwnProperty.call(modulator, 'vco'))
  .describe('which is an OscillatorNode')
  .test(modulator.vco instanceof OscillatorNode)
  .describe('features a modulator vca')
  .test(Object.prototype.hasOwnProperty.call(modulator, 'vca'))
  .describe('which is a GainNode')
  .test(modulator.vca instanceof GainNode)

report()
