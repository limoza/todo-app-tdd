type Status = 'done' | 'undone'

export type Todo = {
  id: number
  text: string
  status: Status
}

export type Todos = Todo[]
