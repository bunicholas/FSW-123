import Todo from './Todo'

function TodoList(props) {

    const list = props.todos.map((todo) => {
        return <Todo 
            key={todo.id} 
            todo={todo}
            completeTodo={props.completeTodo}
            deleteTodo={props.deleteTodo} />
    })

    return (
        <div>
            <h1>List of Todos</h1>
            <ul>
                {list}
            </ul>
        </div>
    )
}

export default TodoList;