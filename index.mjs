const createSynth = (audio = new AudioContext(), base = 440, ratio = 1, pimp = 80) => {
  const carrier = { vco: audio.createOscillator(), vca: audio.createGain() }

  carrier.vco.start()
  carrier.vco.frequency.setValueAtTime(base, audio.currentTime)
  carrier.vco.connect(carrier.vca)

  const modulator = { vco: audio.createOscillator(), vca: audio.createGain() }

  modulator.vco.start()
  modulator.vco.frequency.setValueAtTime(base * ratio, audio.currentTime)
  modulator.vco.connect(modulator.vca)

  modulator.vca.gain.setValueAtTime(pimp, audio.currentTime)
  modulator.vca.connect(carrier.vco.frequency)

  return { carrier, modulator }
}

export default createSynth
