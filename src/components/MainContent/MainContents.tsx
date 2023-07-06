import { ToDoList } from '@/components/ToDoList'
import { Todos } from '@/types/types'

export const MainContents = () => {
  const todos: Todos = [
    {
      id: 1,
      text: 'ToDoText',
      status: 'undone',
    },
  ]
  return (
    <main>
      <div>
        <ToDoList todos={todos} />
        <div>
          <button>完了したToDoを表示</button>
        </div>
      </div>
    </main>
  )
}
