import TodoItem from "./todosListComponents/TodoItem";

interface TodosListProps {
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodosList = (props: TodosListProps) => {
  const [todos, setTodos] = [props.todos, props.setTodos]

  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} setTodos={setTodos}/>
      ))}
    </ul>
  )
}

export default TodosList;