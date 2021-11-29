import { useState } from 'react'

const TodoInput = ( {addTodo} ) => {

    const[currentTodo, setCurrentTodo] = useState('')
    return (
        <div className="todo-input">
            <label htmlFor="todoInput"></label>
            <input 
            type="text" 
            name="todoInput"
            placeholder="Create a new todo" 
            value={currentTodo} 
            onChange={(e) => setCurrentTodo(e.target.value)} 
            onKeyPress={(e) => addTodo(e, currentTodo, setCurrentTodo)} />
    </div>
    )
}

export default TodoInput
