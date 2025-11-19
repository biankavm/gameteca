import { render, screen } from '@testing-library/react'
import { GameCard } from './card'

describe('GameCard', () => {
  const renderComp = () => {
    const mockGame = {
      id: 1,
      title: 'some game',
      description: 'some game description',
      image_url: 'https://test-url',
      platforms: ['pc', 'mobile'],
      categories: ['fight', 'race'],
      release: '21/11/2025'
    }

    return render(<GameCard game={mockGame} />)
  }

  it('should match snapshot', () => {
    const { container } = renderComp()
    expect(container).toMatchSnapshot()
  })

  it('should render title correctly', () => {
    renderComp()

    const title = screen.getByText(/some game/i)
    expect(title).toBeInTheDocument()
  })

  it('should render game image correctly', () => {
    renderComp()
    const gameImg = screen.getByRole('img', { name: /some game/i })

    expect(gameImg).toBeInTheDocument()
    expect(gameImg.getAttribute('src')).toContain('test-url')
  })

  it('should render link correctly', () => {
    renderComp()
    const link = screen.getByRole('link')

    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/game/1')
  })
})
