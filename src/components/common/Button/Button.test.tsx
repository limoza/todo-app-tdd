import { render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('Button components Test', () => {
  it('button要素が表示されている', () => {
    render(<Button />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
  it('button要素のテキストはBUTTONである', () => {
    render(<Button />)
    expect(screen.getByRole('button')).toHaveTextContent('BUTTON')
  })
  it.todo('button要素をクリックすれば関数が動く')
})
