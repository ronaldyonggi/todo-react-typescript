import { useEffect, useState } from "react"
import InputTodo from "./todosLogicComponents/InputTodo"
import TodosList from "./todosLogicComponents/TodosList"

const TodosLogic = () => {
  // const initialTodos: Todo[] = [
  //   {
  //     id: '1',
  //     title: 'Setup development environment',
  //     completed: true,
  //   },
  //   {
  //     id: '2',
  //     title: 'Develop website and add content',
  //     completed: false,
  //   },
  //   {
  //     id: '3',
  //     title: 'Deploy to live server',
  //     completed: false,
  //   },
  // ]

  const [todos, setTodos] = useState(getInitialTodos())

  useEffect(() => {
    // Store todos to local storage
    const temp = JSON.stringify(todos)
    localStorage.setItem('todos', temp)
  }, [todos])

  function getInitialTodos() {
    // Retrieve the stored todo from local storage
    const temp = localStorage.getItem('todos');
    if (!temp) return
    const savedTodos = JSON.parse(temp)
    return savedTodos || [];
  }

  return (
    <div>
      <InputTodo setTodos={setTodos} />
      <TodosList todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default TodosLogic