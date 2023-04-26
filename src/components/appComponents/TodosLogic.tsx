import { useState } from "react"
import InputTodo from "./todosLogicComponents/InputTodo"
import TodosList from "./todosLogicComponents/TodosList"

const TodosLogic = () => {
  const initialTodos: Todo[] = [
    {
      id: '1',
      title: 'Setup development environment',
      completed: true,
    },
    {
      id: '2',
      title: 'Develop website and add content',
      completed: false,
    },
    {
      id: '3',
      title: 'Deploy to live server',
      completed: false,
    },
  ]

  const [todos, setTodos] = useState(initialTodos)

  return (
    <div>
      <InputTodo setTodos={setTodos} />
      <TodosList todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default TodosLogic