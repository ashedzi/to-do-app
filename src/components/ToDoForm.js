import { useRef, useEffect, useState } from "react";

function ToDoForm({addTask}) {
    const[taskInput, setTaskInput] =  useState("");

    function handleInputChange(event) {
        setTaskInput(event.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(taskInput);
        setTaskInput("");
    };

    return(
        <form className="flex form-container center" onSubmit={handleSubmit}>
            <input 
                type='text' 
                placeholder="Enter Task" 
                value={taskInput} 
                onChange={handleInputChange}
                className='input'
                required
                autoFocus
            />
            <button type='submit'>Add Task</button>
        </form>
    );
}

export default ToDoForm;