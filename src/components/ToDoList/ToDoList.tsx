import { Todo, Todos } from '@/types/types'

type Props = {
  todos: Todos
}

export const ToDoList = ({ todos }: Props) => {
  return (
    <ul>
      {todos.map((todo: Todo) => {
        return (
          <li key={`todo-${todo.id}`}>
            <input
              type="checkbox"
              id={`todo-${todo.id}`}
              checked={todo.status === 'done'}
            />
            <label htmlFor={`todo-${todo.id}`}>{todo.text}</label>
            <button>編集</button>
          </li>
        )
      })}
      <li>
        <label htmlFor="ToDoTextInput">
          <input type="text" id="ToDoTextInput" />
          <button>追加</button>
        </label>
      </li>
    </ul>
  )
}
