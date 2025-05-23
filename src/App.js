import ToDoForm from "./components/ToDoForm";
import ToDos from "./components/ToDos";
import ToDoItem from "./components/ToDoItem";
import { useRef, useEffect, useState } from "react";


function App() {
  const date = new Date().toDateString();
  const [tasks, setTasks] = useState([]);
  const [editingId, setEditingId ] = useState(null);

  const addTask = (taskName) => {
    if (taskName.trim() !== "") {
      const newTask = {
        id: Date.now(),
        name: taskName,
        completed: false,
        date: new Date().toDateString()
      };
      setTasks(prev => [...prev, newTask]);
    }
  };

  return (
    <main className="container">
      <h2>Remynd App</h2>
      <ToDoForm addTask={addTask} />
      <ToDos 
        tasks={tasks} 
        deleteTask={deleteTask} 
        toggleComplete={toggleComplete} 
      />
    </main>
  );
}

export default App;