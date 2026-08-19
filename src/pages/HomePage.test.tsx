import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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
  it('states the product, current maturity, and primary response path', () => {
    renderPage()

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'Tools for 3D data that changes over time.',
      }),
    ).toBeInTheDocument()
    expect(screen.getByText(/early research software/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /tell us what breaks/i })).toHaveAttribute(
      'href',
      expect.stringContaining('/discussions'),
    )
  })

  it('provides accessible playback and measurement controls', async () => {
    const user = userEvent.setup()
    renderPage()

    const playButton = screen.getByRole('button', { name: /play sequence/i })
    await user.click(playButton)
    expect(await screen.findByRole('button', { name: /pause sequence/i })).toBeInTheDocument()

    await user.click(screen.getByRole('tab', { name: 'What it measures' }))
    expect(screen.getByText(/vertex-set measurements are not area-weighted/i)).toBeVisible()
  })

  it('keeps limitations next to research results', () => {
    renderPage()

    expect(screen.getByText(/peak memory increased from about 144 MB to 372 MB/i)).toBeVisible()
    expect(screen.getByText(/not yet a complete shared Open4D workflow/i)).toBeVisible()
  })
})
