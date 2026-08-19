export function BenchmarkChart() {
  return (
    <div className="benchmark-table" role="table" aria-label="V-DMC decoder test measurements">
      <div className="benchmark-table__row benchmark-table__row--header" role="row">
        <span role="columnheader">Measurement</span>
        <span role="columnheader">Baseline</span>
        <span role="columnheader">Parallel revision</span>
      </div>
      <div className="benchmark-table__row" role="row">
        <strong role="cell">Wall time</strong>
        <span role="cell">1.978 s</span>
        <span role="cell">0.704 s</span>
      </div>
      <div className="benchmark-table__row" role="row">
        <strong role="cell">Peak memory</strong>
        <span role="cell">144 MB</span>
        <span role="cell">372 MB</span>
      </div>
      <div className="benchmark-table__validation">
        <strong>Output validation</strong>
        <span>20 / 20 checks passed; 30 generated files were byte-identical.</span>
      </div>
    </div>
  )
}
