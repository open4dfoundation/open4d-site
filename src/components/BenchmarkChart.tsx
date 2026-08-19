import { Group } from '@visx/group'
import { scaleBand, scaleLinear } from '@visx/scale'
import { BarRounded } from '@visx/shape'
import { motion, useInView, useReducedMotion } from 'motion/react'
import { useRef } from 'react'

const timeData = [
  { label: 'Before', value: 1.978 },
  { label: 'After', value: 0.704 },
]

const memoryData = [
  { label: 'Before', value: 144 },
  { label: 'After', value: 372 },
]

type ChartProps = {
  title: string
  unit: string
  data: typeof timeData
  maximum: number
  accent?: boolean
}

function MeasureChart({ title, unit, data, maximum, accent = false }: ChartProps) {
  const width = 420
  const height = 210
  const margin = { top: 32, right: 10, bottom: 40, left: 10 }
  const chartHeight = height - margin.top - margin.bottom
  const chartWidth = width - margin.left - margin.right
  const x = scaleBand({
    domain: data.map((item) => item.label),
    range: [0, chartWidth],
    padding: 0.38,
  })
  const y = scaleLinear({ domain: [0, maximum], range: [chartHeight, 0] })
  const ref = useRef<SVGSVGElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.35 })
  const reducedMotion = useReducedMotion()

  return (
    <div className={`measure-chart${accent ? ' measure-chart--accent' : ''}`}>
      <h3>{title}</h3>
      <svg ref={ref} viewBox={`0 0 ${width} ${height}`} role="img" aria-label={`${title}: ${data[0].value} ${unit} before and ${data[1].value} ${unit} after`}>
        <Group left={margin.left} top={margin.top}>
          {data.map((item, index) => {
            const barWidth = x.bandwidth()
            const barHeight = chartHeight - (y(item.value) ?? 0)
            const barX = x(item.label) ?? 0
            const barY = chartHeight - barHeight
            return (
              <g key={item.label}>
                <motion.rect
                  x={barX}
                  width={barWidth}
                  rx={2}
                  initial={{ y: chartHeight, height: 0 }}
                  animate={inView ? { y: barY, height: barHeight } : { y: chartHeight, height: 0 }}
                  transition={reducedMotion ? { duration: 0 } : { duration: 0.8, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  fill={index === 1 ? 'currentColor' : 'var(--chart-muted)'}
                />
                <text x={barX + barWidth / 2} y={chartHeight + 26} textAnchor="middle">
                  {item.label}
                </text>
                <text className="chart-value" x={barX + barWidth / 2} y={Math.max(18, barY - 10)} textAnchor="middle">
                  {item.value} {unit}
                </text>
              </g>
            )
          })}
          <BarRounded x={0} y={chartHeight} width={chartWidth} height={1} radius={0} fill="var(--chart-line)" />
        </Group>
      </svg>
    </div>
  )
}

export function BenchmarkChart() {
  return (
    <div className="benchmark-chart">
      <MeasureChart title="Wall time" unit="s" data={timeData} maximum={2.2} accent />
      <MeasureChart title="Peak memory" unit="MB" data={memoryData} maximum={420} />
    </div>
  )
}
