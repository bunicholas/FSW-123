import './App.css'
import TodoList from './components/TodoList'
import { todolist } from './STORE'
import { useState } from 'react'

function App() {

  // Create a state variable called todos to store the array of todos.
  const [todos, setTodos] = useState(todolist)

  const completeTodo = (id) => {
    const myCopy = [...todos]
    const index = myCopy.findIndex(item => item.id === id)
    
    myCopy[index].isCompleted = !myCopy[index].isCompleted
    setTodos(myCopy)
  }

  const deleteTodo = (id) => {
    const myCopy = [...todos]
    const filtered = myCopy.filter(item => item.id !== id)
    setTodos(filtered)
  }

  return (
    <div className="App">
      <header className="App-header">
        <TodoList 
          todos={todos}
          completeTodo={completeTodo}
          deleteTodo={deleteTodo} />
      </header>
    </div>
  );
}

export default App;
