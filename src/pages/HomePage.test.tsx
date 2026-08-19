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
  it('states the product, current scope, and primary repository path', () => {
    renderPage()

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'Tools for 3D data that changes over time.',
      }),
    ).toBeInTheDocument()
    expect(screen.getByText(/stable public I\/O and metrics APIs are next/i)).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: /describe your workflow/i })[0]).toHaveAttribute(
      'href', expect.stringContaining('/discussions'),
    )
  })

  it('provides stable, accessible frame controls and comparison details', async () => {
    const user = userEvent.setup()
    renderPage()

    const lastFrame = screen.getByRole('button', { name: /show frame 10 at 0.9 s/i })
    await user.click(lastFrame)
    expect(lastFrame).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByText('20,999')).toBeVisible()

    expect(screen.getByText(/bidirectional nearest-vertex distance/i)).toBeVisible()
  })

  it('keeps scope notes next to research results', () => {
    renderPage()

    expect(screen.getByText(/peak memory rose from about 144 MB to 372 MB/i)).toBeVisible()
    expect(screen.getByText(/not yet a complete shared Open4D workflow/i)).toBeVisible()
  })
})
