interface TodoItemProps {
  todo: Todo
}

const TodoItem = (props: TodoItemProps) => {
  const todo = props.todo
  return (
    <li key={todo.id}>{todo.title}</li>
  )
}

export default TodoItem;