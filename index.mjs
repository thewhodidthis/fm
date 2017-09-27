const createVoice = (audio = new AudioContext(), base = 440, ratio = 1, pimp = 80) => {
  const { currentTime } = audio
  const carrier = { vco: audio.createOscillator(), vca: audio.createGain() }

  carrier.vco.frequency.setValueAtTime(base, currentTime)
  carrier.vco.connect(carrier.vca)

  const modulator = { vco: audio.createOscillator(), vca: audio.createGain() }

  modulator.vco.frequency.setValueAtTime(base * ratio, currentTime)
  modulator.vco.connect(modulator.vca)

  modulator.vca.gain.setValueAtTime(pimp, currentTime)
  modulator.vca.connect(carrier.vco.frequency)

  return { carrier, modulator }
}

export default createVoice
