interface TodosListProps {
  todos: Todo[]
}

const TodosList = (props: TodosListProps) => {
  const todos = props.todos
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  )
}

export default TodosList;