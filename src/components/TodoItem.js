import CheckMarkIcon from '../assets/images/icon-check.svg'

const TodoItem = ({todo, markAsActive, markAsCompleted}) => {
    return (
        <div key={todo.id} className={`todo ${todo.active ? 'active': ''} ${todo.completed ? 'completed': ''}`} onDoubleClick={() => markAsCompleted(todo.id)}>
            <label onClick={() => markAsActive(todo.id)} htmlFor={`check${todo.id}`}>
                <img src={CheckMarkIcon} alt="" />
            </label>
            <input onChange={() => markAsActive(todo.id)} type="checkbox" name={'check' + todo.id} />
            <span>{todo.value}</span>
        </div>
    )
}

export default TodoItem