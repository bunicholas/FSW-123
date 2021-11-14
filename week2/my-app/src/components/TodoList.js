function TodoList(props) {
    return (
        <div>
            <h1>List of Todos</h1>
            <ul>
                {props.todos.map((todo, index) => {
                    return (
                        <li key={index}>
                            <input type="checkbox" />
                            {todo.text}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default TodoList;