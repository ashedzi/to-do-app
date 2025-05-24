import ToDoForm from "./components/ToDoForm";
import ToDos from "./components/ToDos";
import { useEffect, useState } from "react";


function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [editingId, setEditingId] = useState(null);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

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
      setTasks(prev => [newTask, ...prev]);
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
        tasks={tasks}
        addTask={addTask}
        inputValue={inputValue}
        setInputValue={setInputValue}
        setEditingId={setEditingId}
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