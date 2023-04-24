import styles from '../../../styles/TodoItem.module.scss'

interface TodoItemProps {
  todo: Todo
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoItem = (props: TodoItemProps) => {
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

  return (
    <li className={styles.item}>
      <div className={styles.content}>
        <input 
        type="checkbox" 
        checked={todo.completed}
        onChange={() => handleChecked(todo.id)}
        />
        <button onClick={() => handleDelete(todo.id)}>Delete</button>
        <span style={todo.completed ? completedStyle : undefined}>
          {todo.title}
        </span>
      </div>
    </li>
  )
}

export default TodoItem;