import './App.css';
import TodoList from './components/TodoList';
import { todos } from './STORE'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoList todos={todos} />
      </header>
    </div>
  );
}

export default App;
