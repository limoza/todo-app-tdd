import { render, screen } from '@testing-library/react'
import { Example } from './Example'

describe('Example', () => {
  it('表示されること', () => {
    render(<Example />)
    // data-testidを利用してテスト対象を抽出する方法
    expect(screen.getByTestId('Example')).toBeInTheDocument()
    expect(screen.getByTestId('Example')).toHaveTextContent('サンプル')

    // テキストを利用してテスト対象を抽出する方法
    expect(screen.getByText('サンプルコンポーネント')).toBeTruthy()
  })
})
