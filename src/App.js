import ToDoForm from "./components/ToDoForm";
import ToDos from "./components/ToDos";
import { useEffect, useState, useReducer } from "react";


const initialState = {
  tasks: JSON.parse(localStorage.getItem("tasks")) || [],
  editingId: null,
  inputValue: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      if (!action.payload.trim()) return state;
      const newTask = {
        id: Date.now(),
        name: action.payload,
        completed: false,
        date: new Date().toDateString(),
      };
      return { ...state, tasks: [newTask, ...state.tasks] };

    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    case "TOGGLE_COMPLETE":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload ? { ...task, completed: !task.completed } : task
        ),
      };

    case "START_EDITING":
      const taskToEdit = state.tasks.find((t) => t.id === action.payload);
      return {
        ...state,
        editingId: action.payload,
        inputValue: taskToEdit ? taskToEdit.name : "",
      };

    case "EDIT_TASK":
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

    case "UPDATE_INPUT":
      return { ...state, inputValue: action.payload };

    case "RESET_INPUT":
      return { ...state, inputValue: "", editingId: null };

    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

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