function Todo(props) {

    return (
        <li key={props.todo.id}>
            <input type="checkbox" 
                checked={props.todo.isCompleted}
                onChange={() => props.completeTodo(props.todo.id)} />
            <span style={{ textDecoration: props.todo.isCompleted ? 'line-through' : '' }}>
                {props.todo.text}
            </span>
            <button onClick={() => props.deleteTodo(props.todo.id)}>X</button>
        </li>
    )
}

// todo.isCompleted ? do this : do something else

export default Todo