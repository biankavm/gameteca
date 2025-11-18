import { render, screen } from '@testing-library/react'
import { Header } from './header'

describe('Header', () => {
  const renderComp = () => render(<Header />)

  it('should match snapshot', () => {
    const { container } = renderComp()
    expect(container).toMatchSnapshot()
  })

  it('should render logo correctly', () => {
    renderComp()
    expect(screen.getByAltText(/controle de videogame/i)).toBeInTheDocument()
  })

  it('should render links correctly', () => {
    renderComp()

    const gamesLink = screen.getByRole('link', { name: 'Games' })
    const profileLink = screen.getByRole('link', { name: 'Perfil' })
    const imageLink = screen.getByRole('link', {
      name: /controle de videogame/i
    })
    const iconLink = screen.getByRole('link', { name: /gamepad icon/i })

    expect(gamesLink).toBeInTheDocument()
    expect(profileLink).toBeInTheDocument()

    expect(imageLink).toBeInTheDocument()
    expect(imageLink).toHaveAttribute('href', '/')

    expect(iconLink).toBeInTheDocument()
    expect(iconLink).toHaveAttribute('href', '/profile')
  })
})
