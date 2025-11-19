import { render, screen } from '@testing-library/react'
import { GamesList } from './list'

jest.mock('../card', () => ({
  GameCard: jest.fn(() => (
    <div data-testid="card-test-id"> game card component! </div>
  ))
}))

describe('GamesList', () => {
  const renderComp = () => {
    const mockGames = [
      {
        id: 1,
        title: 'some game',
        description: 'some game description',
        image_url: 'test-url',
        platforms: ['pc', 'mobile'],
        categories: ['fight', 'race'],
        release: '21/11/2025'
      }
    ]
    return render(<GamesList games={mockGames} />)
  }

  it('should render correctly', () => {
    const { container } = renderComp()
    expect(container).toMatchSnapshot()
  })

  it('should render title correctly', () => {
    renderComp()

    expect(
      screen.getByRole('heading', { name: /jogos para conhecer/i })
    ).toBeInTheDocument()
  })

  it('should render game card correctly', () => {
    renderComp()

    expect(screen.getByTestId('card-test-id')).toBeInTheDocument()
    expect(screen.getByText(/game card component/i)).toBeInTheDocument()
  })
})
