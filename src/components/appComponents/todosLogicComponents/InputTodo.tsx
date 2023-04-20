import { useState } from "react";
import {v4 as uuidv4} from "uuid";


interface InputTodoProps {
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const InputTodo = (props: InputTodoProps) => {
  const setTodos = props.setTodos
  const [title, setTitle] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newTodo = {
      id: uuidv4(), // creates a new random id using uuidv4
      title: title,
      completed: false
    }
    setTodos(prevState =>[...prevState].concat([newTodo]))
    setTitle('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
      type="text"
      placeholder="Add todo..."
      value={title}
      onChange={handleChange}
       />
      <button>Submit</button>
    </form>
  )
}

export default InputTodo;