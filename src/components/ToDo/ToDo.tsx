import { Todo, Todos } from '@/types/types'

type Props = {
  todos: Todos
}

export const ToDo = ({ todos }: Props) => {
  return (
    <li>
      <label htmlFor="ToDoTextInput">
        <input type="text" id="ToDoTextInput" />
        <button>追加</button>
      </label>
    </li>
  )
}
