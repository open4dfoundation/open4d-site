export function SequenceStage() {
  return (
    <figure className="sequence-stage" aria-labelledby="sequence-caption">
      <div className="sequence-stage__image">
        <video
          aria-label="Open4D basketball mesh sequence"
          controls
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

      <div className="sequence-stage__panel">
        <div>
          <h2>Load and scrub a numbered mesh sequence.</h2>
          <p>
            This recording runs the repository viewer on ten basketball mesh
            frames. It shows the frame number, source index, mesh size, orbit
            view, and timeline together.
          </p>
        </div>

        <dl className="sequence-readout">
          <div><dt>Frames</dt><dd>10</dd></div>
          <div><dt>Playback</dt><dd>10 fps</dd></div>
          <div><dt>Length</dt><dd>1.0 s</dd></div>
        </dl>
      </div>

      <figcaption id="sequence-caption">
        One-second recording of the basketball sequence in the TVMC viewer
        example. Use the video controls to play, pause, or scrub.
      </figcaption>
    </figure>
  )
}
