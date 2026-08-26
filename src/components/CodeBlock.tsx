import { Check, Copy } from 'lucide-react'
import { useState } from 'react'
import type { AnalyticsEvent } from '../lib/analytics'
import { track } from '../lib/analytics'

type CodeBlockProps = {
  code: string
  label?: string
  language?: string
  copyEvent?: AnalyticsEvent
}

export function CodeBlock({ code, label = 'Code', language = 'python', copyEvent }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    await navigator.clipboard.writeText(code)
    if (copyEvent) track(copyEvent)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <div className="code-block">
      <div className="code-block__bar">
        <span>{label}</span>
        <button type="button" onClick={copy} aria-label={`Copy ${label.toLowerCase()}`}>
          {copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
          {copied ? 'Copied' : 'Copy'}
        </button>
        <span className="visually-hidden" aria-live="polite">{copied ? `${label} copied` : ''}</span>
      </div>
      <pre data-language={language} tabIndex={0}><code>{code}</code></pre>
    </div>
  )
}
