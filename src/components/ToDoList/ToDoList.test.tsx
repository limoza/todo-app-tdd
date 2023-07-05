import { render, screen } from '@testing-library/react'
import { ToDoList } from './ToDoList'

describe('ToDoList components Test', () => {
  it('ToDoList要素が1つだけ表示されている', () => {
    render(<ToDoList />)
    expect(screen.getAllByRole('list')).toHaveLength(1)
  })
  it.todo('listの個数がtodos + 入力欄と同じ数である')
})
