import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { HomePage } from './HomePage'

function renderPage() {
  return render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>,
  )
}

describe('Open4D homepage', () => {
  it('states the product, current scope, and primary repository path', () => {
    renderPage()

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'Mesh sequences, without another one-off script.',
      }),
    ).toBeInTheDocument()
    expect(screen.getByText(/source preview only/i)).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: /see the source preview/i })[0]).toHaveAttribute(
      'href', expect.stringContaining('github.com/open4dfoundation/Open4D'),
    )
    expect(screen.queryByText(/pip install open4d/i)).not.toBeInTheDocument()
  })

  it('provides normal video playback and a factual recording ledger', () => {
    renderPage()

    const video = screen.getByLabelText(/open4d viewer playing a ten-frame obj mesh sequence/i)
    expect(video).toHaveAttribute('controls')
    expect(video.querySelectorAll('source')).toHaveLength(2)
    expect(screen.getByText('10 OBJ frames')).toBeVisible()
    expect(screen.getByText('Play, pause, scrub, orbit')).toBeVisible()
  })

  it('puts own data, inspection, and limits in the main path', () => {
    renderPage()

    expect(screen.getByRole('heading', { name: 'Use your own data next.' })).toBeVisible()
    expect(screen.getByText(/without decoding the whole sequence/i)).toBeVisible()
    expect(screen.getByRole('heading', { name: 'What the first API handles.' })).toBeVisible()
    expect(screen.getByText(/point-cloud, gaussian, volume/i)).toBeVisible()
  })
})
