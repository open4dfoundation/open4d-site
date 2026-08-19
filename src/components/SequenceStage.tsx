import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { Pause, Play } from 'lucide-react'
import { useEffect, useState } from 'react'

const frames = [
  { src: '/media/frame-01.png', frame: '01', time: '0.0 s', source: '0', vertices: '20,672', triangles: '39,421' },
  { src: '/media/frame-02.png', frame: '03', time: '0.2 s', source: '2', vertices: '20,686', triangles: '39,292' },
  { src: '/media/frame-03.png', frame: '05', time: '0.4 s', source: '4', vertices: '20,805', triangles: '39,390' },
  { src: '/media/frame-04.png', frame: '07', time: '0.6 s', source: '6', vertices: '20,885', triangles: '39,413' },
  { src: '/media/frame-05.png', frame: '10', time: '0.9 s', source: '9', vertices: '20,999', triangles: '39,356' },
]

export function SequenceStage() {
  const [selected, setSelected] = useState(2)
  const [playing, setPlaying] = useState(false)
  const reducedMotion = useReducedMotion()
  const active = frames[selected]

  useEffect(() => {
    frames.forEach(({ src }) => {
      const image = new Image()
      image.src = src
    })
  }, [])

  useEffect(() => {
    if (!playing) return

    const nextIndex = (selected + 1) % frames.length
    const currentTime = Number.parseFloat(frames[selected].time)
    const nextTime = Number.parseFloat(frames[nextIndex].time)
    const delay = nextIndex === 0 ? 300 : (nextTime - currentTime) * 1000
    const timer = window.setTimeout(() => setSelected(nextIndex), delay)

    return () => window.clearTimeout(timer)
  }, [playing, selected])

  const togglePlayback = () => {
    if (!playing && selected === frames.length - 1) setSelected(0)
    setPlaying((value) => !value)
  }

  return (
    <figure className="sequence-stage" aria-labelledby="sequence-caption">
      <div className="sequence-stage__image">
        <AnimatePresence mode="wait" initial={false}>
          <motion.img
            key={active.src}
            src={active.src}
            alt={`Open4D viewer showing basketball sequence frame ${active.frame} of 10`}
            initial={reducedMotion ? false : { opacity: 0, clipPath: 'inset(0 0 8% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            exit={reducedMotion ? undefined : { opacity: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.22, ease: [0.16, 1, 0.3, 1] }}
            width="420"
            height="466"
          />
        </AnimatePresence>
      </div>

      <div className="sequence-stage__panel">
        <div>
          <p className="instrument-label">Working example</p>
          <h2>Inspect a mesh sequence one frame at a time.</h2>
          <p>
            The repository example loads numbered mesh files, reports sequence
            information, and gives researchers a small viewer for orbiting,
            scrubbing, stepping, and recording.
          </p>
        </div>

        <dl className="sequence-readout">
          <div><dt>Frame</dt><dd>{active.frame} / 10</dd></div>
          <div><dt>Time</dt><dd>{active.time}</dd></div>
          <div><dt>Source index</dt><dd>{active.source}</dd></div>
          <div><dt>Rate</dt><dd>10 fps</dd></div>
          <div><dt>Vertices</dt><dd>{active.vertices}</dd></div>
          <div><dt>Triangles</dt><dd>{active.triangles}</dd></div>
        </dl>

        <p className="sr-only" role="status" aria-live={playing ? 'off' : 'polite'}>
          Frame {active.frame} selected at {active.time}, {active.vertices} vertices and {active.triangles} triangles.
        </p>

        <div className="sequence-controls">
          <button className="sequence-playback" type="button" onClick={togglePlayback}>
            {playing ? <Pause aria-hidden="true" /> : <Play aria-hidden="true" />}
            {playing ? 'Pause sequence' : 'Play sampled sequence'}
          </button>
          <div className="frame-selector" aria-label="Choose a sequence frame">
            {frames.map((frame, index) => (
              <button
                key={frame.src}
                type="button"
                className={index === selected ? 'is-active' : undefined}
                aria-pressed={index === selected}
                aria-label={`Show frame ${frame.frame} at ${frame.time}`}
                onClick={() => {
                  setPlaying(false)
                  setSelected(index)
                }}
              >
                <span>{frame.frame}</span>
                <small>{frame.time}</small>
              </button>
            ))}
          </div>
        </div>
      </div>

      <figcaption id="sequence-caption">
        Five sampled frames from the ten-frame basketball mesh sequence included
        with the TVMC research code.
      </figcaption>
    </figure>
  )
}
