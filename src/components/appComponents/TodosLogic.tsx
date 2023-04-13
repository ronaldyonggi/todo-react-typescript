import InputTodo from "./todosLogicComponents/InputTodo"
import TodosList from "./todosLogicComponents/TodosList"

const TodosLogic = () => {
  const todos: Todo[] = [
    {
      id: 1,
      title: 'Setup development environment',
      completed: true,
    },
    {
      id: 2,
      title: 'Develop website and add content',
      completed: false,
    },
    {
      id: 3,
      title: 'Deploy to live server',
      completed: false,
    },
  ]
  return (
    <div>
      <InputTodo />
      <TodosList todos={todos}/>
    </div>
  )
}

export default TodosLogic