import ToDoForm from "./components/ToDoForm";
import ToDos from "./components/ToDos";
import ToDoItem from "./components/ToDoItem";
import { useRef, useEffect, useState } from "react";


function App() {
  const date = new Date().toDateString();
  const [tasks, setTasks] = useState([]);
  const [editingId, setEditingId ] = useState(null);

//   function addTask() {
//     if(newTask.trim() !== "") {
//       setTasks(prevState => [...prevState, tasks]);
//       setNewTask('');

//     }
//   }

// function deleteTask() {
//   const updatedTasks = prevState.filter((_, i) =>i !== index)
//   setTasks(updatedTasks);

// }



//   const deleteTask() {
//   }

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

const deleteTask =(id) => {
  const updated = tasks.filter(task => task.id !== id);
  setTasks(updated);
};

const toogleComplete = (id) => {
  const updated = tasks.map(task =>
    task.id === id ? {...task, completed: !task.completed}
 : task);
 setTasks(updated);
}

const editTask =(id, newName) => {
  const updated = tasks.map(task => 
    task.id === id ? {...task, name: newName, date: new Date().toDateString()} : task
  );
  setTasks(updated);
  setEditingId(null);
};
   
  return (
      <section className="container">
        <h2> Remynd App</h2>
        <ToDoItem/>
      </section>
  );
}

export default App;
