import { render, screen } from '@testing-library/react'
import { Container } from './container'

describe('Container', () => {
  const renderComp = () => {
    const MockChildren = () => (
      <div data-testid="children-test-id"> hello! i am a children!</div>
    )

    return render(
      <Container>
        <MockChildren />
      </Container>
    )
  }

  it('should match snapshot', () => {
    const { container } = renderComp()
    expect(container).toMatchSnapshot()
  })

  it('should render children correctly', () => {
    renderComp()
    expect(screen.getByText(/i am a children/i)).toBeInTheDocument()
    expect(screen.getByTestId('children-test-id')).toBeInTheDocument()
  })
})
