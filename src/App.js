import ToDoForm from "./components/ToDoForm";
import ToDos from "./components/ToDos";
import { useRef, useEffect, useState } from "react";


function App() {
  const date = new Date().toDateString();
  const [tasks, setTasks] = useState([]);
  const [editingId, setEditingId ] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const startEditing = (id) => {
    const taskToEdit = tasks.find(task => task.id === id);
    setEditingId(id);
    setInputValue(taskToEdit.name);
  }

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

const deleteTask = (id) => {
  const updated = tasks.filter(task => task.id !== id);
  setTasks(updated);
};

const toggleComplete = (id) => {
  const updated = tasks.map(task =>
    task.id === id ? {...task, completed: !task.completed}
 : task);
 setTasks(updated);
}

const editTask = (id, newName) => {
  const updated = tasks.map(task => 
    task.id === id ? {...task, name: newName, date: new Date().toDateString()} : task
  );
  setTasks(updated);
  setEditingId(null);
};

  return (
    <main className="container">
      <h2>Remynd App</h2>
      <ToDoForm 
        addTask={addTask}
        inputValue={inputValue}
        setInputValue={setInputValue}
        editingId={editingId}
        editTask={editTask} 
      />
      <ToDos 
        tasks={tasks} 
        deleteTask={deleteTask} 
        toggleComplete={toggleComplete} 
        editTask={editTask}
        editingId={editingId}
        setEditingId={startEditing}
      />
    </main>
  );
}

export default App;