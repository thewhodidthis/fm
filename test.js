'use strict'

window.AudioContext = window.AudioContext || window.webkitAudioContext

const kpow = require('kpow')
const test = require('tape')

kpow()

test('will default', (t) => {
  t.end()
})
