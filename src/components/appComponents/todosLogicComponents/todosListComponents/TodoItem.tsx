interface TodoItemProps {
  todo: Todo
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoItem = (props: TodoItemProps) => {
  const todo = props.todo
  const setTodos = props.setTodos

  const handleChecked = (id: string) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) return {
          ...todo,
          completed: !todo.completed
        }
        else return todo
      }))
  }

  const handleDelete = (id: string) => {
    setTodos((prevState) => 
      prevState.filter((todo) => todo.id !== id))
  }

  return (
    <li>
      <input 
      type="checkbox" 
      checked={todo.completed}
      onChange={() => handleChecked(todo.id)}
      />
      <button onClick={() => handleDelete(todo.id)}>Delete</button>
      {todo.title}
    </li>
  )
}

export default TodoItem;