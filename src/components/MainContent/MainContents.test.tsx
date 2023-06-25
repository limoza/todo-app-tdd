import { render, screen } from '@testing-library/react'
import { MainContents } from './MainContents'

describe('MainContents components Test', () => {
  it('main要素が一つだけ表示されている', () => {
    render(<MainContents />)
    expect(screen.getAllByRole('main')).toHaveLength(1)
  })
})
