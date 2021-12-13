import { useState } from "react"

function Todo(props) {

const todos = {
    text: props.text || '',
}
const [inputs, setInputs] = useState(todos)
const [editToggle, setEditToggle] = useState(false)

function handleChange(e) {
    const { name, value } = e.target

    setInputs(prevInputs => ({...prevInputs, [name]: value}))
}
function handleSubmit(e) {
    e.preventDefault()

    props.editTodo(inputs, props.Id)

    setEditToggle(false)
}
    return (
        <div>
{!editToggle ?
        
        <li key={props.todo.id}>
            <input type="checkbox" 
                checked={props.todo.isCompleted}
                onChange={() => props.completeTodo(props.todo.id)} />
            <span style={{ textDecoration: props.todo.isCompleted ? 'line-through' : '' }}>
                {props.todo.text}
            </span>
            <button onClick={() => props.deleteTodo(props.todo.id)}>X</button>
            <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>edit</button>
        </li>
        :
        <>
        <form>
            <input type="text" name="text" onChange = {handleChange} placeholder="text" value = {inputs.text}></input>
            <button onClick={handleSubmit}>Save</button>
            <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>cancel</button>
        </form>
        </>
}
        </div>
    )
}

// todo.isCompleted ? do this : do something else

export default Todo