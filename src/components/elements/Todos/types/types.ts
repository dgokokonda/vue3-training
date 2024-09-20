export type TodosProps = {
  todos: TodoType[]
}

export interface TodoType {
  id: number
  name: string
}

export interface TodosEmits {
  (e: 'deleteTodo', item: TodoType): void
}
