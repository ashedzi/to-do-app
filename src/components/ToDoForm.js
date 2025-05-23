import { useRef, useEffect, useState } from "react";

function ToDoForm({addTask, inputValue, setInputValue, editingId, editTask}) {
    const[taskInput, setTaskInput] =  useState("");

    function handleInputChange(event) {
        setInputValue(event.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingId) {
            editTask(editingId, inputValue);
        } else {
            addTask(inputValue);
        }
        setTaskInput("");
    };

    return(
        <form className="flex form-container center" onSubmit={handleSubmit}>
            <input 
                type='text' 
                placeholder="Enter Task" 
                value={inputValue} 
                onChange={handleInputChange}
                className='input'
                required
                autoFocus
            />
            <button type='submit'>{editingId ? "Update Task" : "Add Task"}</button>
        </form>
    );
}

export default ToDoForm;