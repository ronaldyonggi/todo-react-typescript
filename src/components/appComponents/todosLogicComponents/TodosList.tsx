import TodoItem from "./todosListComponents/TodoItem";

interface TodosListProps {
  todos: Todo[]
}

const TodosList = (props: TodosListProps) => {
  const todos = props.todos
  return (
    <ul>
      {todos.map(todo => (
        // <li key={todo.id}>{todo.title}</li>
        <TodoItem todo={todo}/>
      ))}
    </ul>
  )
}

export default TodosList;