import { useState } from "react";
import {v4 as uuidv4} from "uuid";


interface InputTodoProps {
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const InputTodo = (props: InputTodoProps) => {
  const setTodos = props.setTodos
  const [title, setTitle] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    // If trimming the title returns false, then the title is empty
    if (title.trim()) {

      // Create a new Todo item
      const newTodo = {
        id: uuidv4(), // creates a new random id using uuidv4
        title: title,
        completed: false
      }
      // Update todos
      setTodos(prevState =>[...prevState].concat([newTodo]))

      // Reset the title input
      setTitle('')
      // Set error message to empty
      setErrorMessage('')
    }
    else {
      setErrorMessage('Cannot add blank todo!')
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
        <input 
        type="text"
        placeholder="Add todo..."
        value={title}
        onChange={handleChange}
        className="input-text"
        />
        <button className="input-submit">Submit</button>
      </form>
      <span className="submit-warning">{errorMessage}</span>
    </>
  )
}

export default InputTodo;