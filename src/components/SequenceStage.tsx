import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { Pause, Play, RotateCcw } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const frames = [
  { src: '/media/frame-01.png', label: '0.0 s' },
  { src: '/media/frame-02.png', label: '0.2 s' },
  { src: '/media/frame-03.png', label: '0.4 s' },
  { src: '/media/frame-04.png', label: '0.6 s' },
  { src: '/media/frame-05.png', label: '0.9 s' },
]

export function SequenceStage() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const reducedMotion = useReducedMotion()
  const [showVideo, setShowVideo] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const update = () => {
      setProgress(video.duration ? video.currentTime / video.duration : 0)
    }
    const finish = () => setPlaying(false)
    video.addEventListener('timeupdate', update)
    video.addEventListener('ended', finish)
    return () => {
      video.removeEventListener('timeupdate', update)
      video.removeEventListener('ended', finish)
    }
  }, [showVideo])

  const togglePlayback = async () => {
    setShowVideo(true)
    requestAnimationFrame(async () => {
      const video = videoRef.current
      if (!video) return
      if (video.paused) {
        await video.play()
        setPlaying(true)
      } else {
        video.pause()
        setPlaying(false)
      }
    })
  }

  const reset = () => {
    const video = videoRef.current
    if (video) {
      video.pause()
      video.currentTime = 0
    }
    setPlaying(false)
    setProgress(0)
    setShowVideo(false)
  }

  return (
    <div className="sequence-stage" aria-label="Open4D sequence viewer demonstration">
      <div className="sequence-stage__viewport">
        <div
          className="frame-strip"
          role="region"
          aria-label="Sequence frames from 0.0 to 0.9 seconds"
          aria-hidden={showVideo ? true : undefined}
          tabIndex={showVideo ? -1 : 0}
        >
          {frames.map((frame, index) => (
            <motion.figure
              className="sequence-frame"
              key={frame.src}
              initial={reducedMotion ? false : { y: 14, filter: 'grayscale(1)' }}
              animate={{ y: 0, filter: 'grayscale(0)' }}
              transition={{
                duration: 0.6,
                delay: index * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <figcaption>t = {frame.label}</figcaption>
              <img src={frame.src} alt="" />
            </motion.figure>
          ))}
        </div>

        <AnimatePresence>
          {showVideo && (
            <motion.div
              className="sequence-video"
              initial={reducedMotion ? false : { clipPath: 'inset(0 50% 0 50%)' }}
              animate={{ clipPath: 'inset(0 0% 0 0%)' }}
              exit={{ clipPath: 'inset(0 50% 0 50%)' }}
              transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
            >
              <video ref={videoRef} muted playsInline preload="metadata">
                <source src="/media/open4d-viewer.webm" type="video/webm" />
                <source src="/media/open4d-viewer.mp4" type="video/mp4" />
              </video>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="sequence-stage__controls">
        <button
          className="media-control"
          type="button"
          aria-label={playing ? 'Pause sequence' : 'Play sequence'}
          onClick={togglePlayback}
        >
          {playing ? <Pause aria-hidden="true" /> : <Play aria-hidden="true" />}
          <span>{playing ? 'Pause sequence' : 'Play sequence'}</span>
        </button>
        <div
          className="timeline"
          role="progressbar"
          aria-label="Sequence playback"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(progress * 100)}
        >
          <span style={{ width: `${progress * 100}%` }} />
        </div>
        <span className="time-readout">{(progress * 0.9).toFixed(1)} / 0.9 s</span>
        <button className="icon-control" type="button" onClick={reset} aria-label="Reset sequence">
          <RotateCcw aria-hidden="true" />
        </button>
      </div>

      <div className="sequence-stage__caption">
        <p>Ten basketball frames loaded and played by the Open4D example viewer.</p>
        <dl>
          <div>
            <dt>Rate</dt>
            <dd>10 fps</dd>
          </div>
          <div>
            <dt>Vertices</dt>
            <dd>20,997</dd>
          </div>
          <div>
            <dt>Triangles</dt>
            <dd>39,356</dd>
          </div>
        </dl>
      </div>
    </div>
  )
}
