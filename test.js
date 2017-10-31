import 'cutaway'
import { assert, report } from 'tapeless'
import createSynth from './index.es'

window.AudioContext = window.AudioContext || window.webkitAudioContext

const { ok } = assert
const { carrier, modulator } = createSynth()

ok(carrier.hasOwnProperty('vco'), 'features a carrier vco', 'will default')
ok(carrier.vco instanceof OscillatorNode, 'which is an OscillatorNode')

ok(carrier.hasOwnProperty('vca'), 'features a carrier vca')
ok(carrier.vca instanceof GainNode, 'which is a GainNode')

ok(modulator.hasOwnProperty('vco'), 'features a modulator vco')
ok(modulator.vco instanceof OscillatorNode, 'which is an OscillatorNode')

ok(modulator.hasOwnProperty('vca'), 'features a modulator vca')
ok(modulator.vca instanceof GainNode, 'which is a GainNode')

report()
