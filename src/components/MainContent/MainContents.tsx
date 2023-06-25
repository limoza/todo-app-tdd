export const MainContent = () => {
  const todos = [
    {
      id: 1,
      text: 'ToDoText',
      status: 'undone',
    },
  ]
  return (
    <main>
      <div>
        <ul>
          {todos.map((todo) => {
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
        <div>
          <button>完了したToDoを表示</button>
        </div>
      </div>
    </main>
  )
}
