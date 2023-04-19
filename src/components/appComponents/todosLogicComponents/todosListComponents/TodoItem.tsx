interface TodoItemProps {
  todo: Todo
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoItem = (props: TodoItemProps) => {
  const todo = props.todo
  const setTodos = props.setTodos

  const handleChecked = (id: number) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) return {
          ...todo,
          completed: !todo.completed
        }
        else return todo
      }))
  }

  return (
    <li>
      <input 
      type="checkbox" 
      checked={todo.completed}
      onChange={() => handleChecked(todo.id)}
      />
      {todo.title}
    </li>
  )
}

export default TodoItem;