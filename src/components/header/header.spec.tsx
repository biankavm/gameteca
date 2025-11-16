import { render, screen } from '@testing-library/react'
import { Header } from './header'

describe('Header', () => {
  const renderComp = () => render(<Header />)

  it('should render component', () => {
    const { container } = renderComp()

    expect(
      screen.getByRole('heading', { name: 'your header!' })
    ).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
})
