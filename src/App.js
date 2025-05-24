import ToDoForm from "./components/ToDoForm";
import ToDos from "./components/ToDos";
import { useEffect, useState, useReducer } from "react";


const initialState = {
  tasks: JSON.parse(localStorage.getItem("tasks")) || [],
  editingId: null,
  inputValue: "",
};

// Using the Reducer function to manage all task-related state changes
function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TASK':
//'payload' is the data sent with the action — in this case, it's the task name as a string.
// We check if it's empty or only whitespace using .trim(); if it is, we return the state unchanged to avoid adding an invalid task.
      if (!action.payload.trim()) return state;
      const newTask = {
        id: Date.now(),
        name: action.payload,
        completed: false,
        date: new Date().toDateString(),
      };
      //I used the spread operator to copy the existing state and update the tasks array with the new task at the beginning.
      return { ...state, tasks: [newTask, ...state.tasks] };

    // payload here is used to get the ID of task to delete
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    // payload here is used to get the ID of task to toggle
    case 'TOGGLE_COMPLETE':
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload ? { ...task, completed: !task.completed } : task
        ),
      };

    case 'START_EDITING':
      const taskToEdit = state.tasks.find((t) => t.id === action.payload);
      return {
        ...state,
        editingId: action.payload,
        inputValue: taskToEdit ? taskToEdit.name : "",
      };

    case 'EDIT_TASK':
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, name: action.payload.name, date: new Date().toDateString() }
            : task
        ),
        editingId: null,
        inputValue: "",
      };

    case 'UPDATE_INPUT':
      return { ...state, inputValue: action.payload };

    case 'RESET_INPUT':
      return { ...state, inputValue: "", editingId: null };

    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

// This is a side effect that happens every time state.tasks changes
// in this case i use useEffect to persist tasks to localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(state.tasks));
  }, [state.tasks]);

  return (
    <main className="container">
      <h2>Remynd App</h2>
      <ToDoForm
        tasks={state.tasks}
        inputValue={state.inputValue}
        editingId={state.editingId}
        dispatch={dispatch}
      />
      <ToDos
        tasks={state.tasks}
        editingId={state.editingId}
        dispatch={dispatch}
      />
    </main>
  );
}

export default App;