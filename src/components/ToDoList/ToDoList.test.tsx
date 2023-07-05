import { render, renderHook, screen, act } from '@testing-library/react'
import { ToDoList } from './ToDoList'
import { useState } from 'react'

describe('ToDoList components Test', () => {
  it('ToDoList要素が1つだけ表示されている', () => {
    render(<ToDoList />)
    expect(screen.getAllByRole('list')).toHaveLength(1)
  })
  it('listの個数がtodos + 入力欄と同じ数である', () => {
    const { result } = renderHook(() =>
      useState([
        {
          id: 1,
          text: 'ToDoText',
          status: 'undone',
        },
      ])
    )
    const [todos, setTodos] = result.current
    const inputLength = 1

    expect(todos.length + inputLength).toBe(2)

    act(() => {
      setTodos((prev) => [
        ...prev,
        {
          id: 2,
          text: 'ToDoText2',
          status: 'undone',
        },
      ])
    })

    const updatedTodos = result.current[0]

    expect(updatedTodos.length + inputLength).toBe(3)
  })
})
