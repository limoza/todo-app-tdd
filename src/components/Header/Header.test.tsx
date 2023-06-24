import { render, screen } from '@testing-library/react'
import { Header } from './Header'

describe('Header components Test', () => {
  it('header要素が1つだけ表示されている', () => {
    render(<Header />)
    expect(screen.getAllByRole('banner')).toHaveLength(1)
  })
  it('h1タグが1つだけ表示されている', () => {
    render(<Header />)
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
  })
  it('h1タグの内容がTDD ToDo Appである', () => {
    render(<Header />)
    expect(
      screen.getAllByRole('heading', { level: 1, name: 'TDD ToDo App' })
    ).toBeInTheDocument()
  })
})
