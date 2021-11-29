import { useState } from 'react'

function App (props) {
    const [count, setCount] = useState(0)
    return (
        <div className="App">
            <h1>This is {props.name}'s app</h1>
            <p>He is a {props.occupation}</p>
            <h2>{ count }</h2>
            <button onClick={() => setCount(count - 1)}>-- Decrease</button>
            <button onClick={() => setCount(count + 1)}>Increase ++</button>
        </div>
    )
}

export default App