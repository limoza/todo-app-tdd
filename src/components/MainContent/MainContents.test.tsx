import { render, screen } from '@testing-library/react'
import { MainContent } from './MainContents'

describe('MainContents components Test', () => {
  it('main要素が一つだけ表示されている', () => {
    render(<MainContent />)
    expect(screen.getAllByRole('main')).toHaveLength(1)
  })
})
