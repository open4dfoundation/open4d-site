import { track } from '../lib/analytics'

export function SequenceStage() {
  return (
    <figure className="demo-stage" id="demo" aria-labelledby="demo-caption">
      <div className="demo-stage__media">
        <video
          aria-label="Open4D viewer playing a ten-frame OBJ mesh sequence"
          controls
          onPlay={() => track('demo_started')}
          onEnded={() => track('demo_completed')}
          controlsList="nodownload"
          playsInline
          preload="metadata"
          poster="/media/frame-01.png"
          width="560"
          height="620"
        >
          <source src="/media/open4d-viewer.webm" type="video/webm" />
          <source src="/media/open4d-viewer.mp4" type="video/mp4" />
          Your browser does not support HTML video.
        </video>
      </div>
      <div className="demo-stage__ledger">
        <div><span>Input</span><strong>10 OBJ frames</strong></div>
        <div><span>Playback</span><strong>10 fps</strong></div>
        <div><span>Controls</span><strong>Play, pause, scrub, orbit</strong></div>
        <div><span>Recording</span><strong>1 second</strong></div>
      </div>
      <figcaption id="demo-caption">
        Source-checkout viewer running the repository basketball example. The
        browser controls play and scrub the recording; the recorded viewer has
        its own sequence timeline.
      </figcaption>
    </figure>
  )
}
