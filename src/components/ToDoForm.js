import { useEffect, useState } from "react";

function ToDoForm({addTask, inputValue, setInputValue, editingId, editTask, setEditingId, tasks}) {

    useEffect(() => {
        if (editingId) {
            const taskToEdit = tasks.find(task => task.id === editingId);
            if (taskToEdit) {
                setInputValue(taskToEdit.name);
            }
        }
    }, [editingId, tasks, setInputValue]);

    function handleInputChange(event) {
        setInputValue(event.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim() === '')
            return;


        if (editingId) {
            editTask(editingId, inputValue);
            setEditingId(null);
        } else {
            addTask(inputValue);
        }
        setInputValue("");
    };

    return(
        <form className="flex form-container center" onSubmit={handleSubmit}>
            <input 
                type='text' 
                id='task-input'
                placeholder="Enter Task" 
                value={inputValue} 
                onChange={handleInputChange}
                className={`input ${editingId? "input-focused" : ""}`}
                maxLength={30}
                required
                autoFocus
            />
            <button type='submit'>{editingId ? "Update" : "Add Task"}</button>
        </form>
    );
}

export default ToDoForm;