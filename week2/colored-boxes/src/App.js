import './App.css';
import Card from './Card';

function App() {
  return (
    <div>

      <Card 
        title="Title 1" 
        subtitle="Sub Title 1"
        description="Hello World 1!"
        width="200px"
        bgColor="red" />
       
       <Card 
        title="Title 2" 
        subtitle="Sub Title 2"
        description="Hello World 2!"
        width="200px"
        bgColor="orange" />

        <Card 
        title="Title 3" 
        subtitle="Sub Title 3"
        description="Hello World 3!"
        width="200px"
        bgColor="yellow" />

        <Card 
        title="Title 4" 
        subtitle="Sub Title 4"
        description="Hello World 4!"
        width="200px"
        bgColor="green" />
        
    </div>
  );
}

export default App;
