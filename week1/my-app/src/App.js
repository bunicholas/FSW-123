import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoList message = "Hello World" />
      </header>
    </div>
  );
}

export default App;
