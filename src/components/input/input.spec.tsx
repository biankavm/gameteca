import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useRouter } from 'next/navigation'
import { Input } from './input'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn()
  }))
}))

describe('Input', () => {
  const renderComp = () => render(<Input />)

  it('should match snapshot', () => {
    const { container } = renderComp()
    expect(container).toMatchSnapshot()
  })

  it('should render elements correctly', () => {
    renderComp()
    const input = screen.getByPlaceholderText(/procurando algum jogo/i)
    const submitButton = screen.getByRole('button')

    expect(input).toBeInTheDocument()
    expect(submitButton).toBeInTheDocument()
    expect(submitButton).toHaveAttribute('type', 'submit')
  })

  it('should redirectly user when click in submit button', async () => {
    const mockPush = jest.fn()

    ;(useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
      replace: jest.fn(),
      prefetch: jest.fn()
    })

    renderComp()

    const user = userEvent.setup()

    const input = screen.getByPlaceholderText(/procurando algum jogo/i)

    const submitButton = screen.getByRole('button')

    await user.type(input, 'Super Mario')
    await user.click(submitButton)

    expect(mockPush).toHaveBeenCalledWith('/game/search/Super Mario')
  })
})
