import { ReactEventHandler, useRef, useState } from 'react'
import styles from '../../../styles/TodoItem.module.scss'

interface TodoItemProps {
  todo: Todo
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoItem = (props: TodoItemProps) => {
  const editInputRef = useRef<HTMLInputElement>(null)
  const [editing, setEditing] = useState(false);
  
  const completedStyle: React.CSSProperties = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through'
  };

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

  // handle changes on editing a todo
  const setUpdate = (newTodoTitle: string, id: string)  => {
    setTodos((prevState) => 
      prevState.map(todo => {
        if (todo.id === id) return {
          ...todo, 
          title: newTodoTitle
        } 
        else return todo
      })
    )
  }

  const handleEditDone = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && editInputRef.current) {
      setUpdate(editInputRef.current.value, todo.id)
      setEditing(false)
    }
  }

  return (
    <li className={styles.item}>
      {!editing && 
        <div className={styles.content}>
          <input 
          type="checkbox" 
          checked={todo.completed}
          onChange={() => handleChecked(todo.id)}
          />
          <button onClick={() => setEditing(true)}>Edit</button>
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
          <span style={todo.completed ? completedStyle : undefined}>
            {todo.title}
          </span>
        </div>
      }

      {editing && 
        <input 
          type='text'
          ref={editInputRef}
          defaultValue={todo.title}
          className={styles.textInput}
          onKeyDown={handleEditDone}
        />
      }
    </li>
  )
}

export default TodoItem;