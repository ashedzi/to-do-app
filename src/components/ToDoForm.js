function ToDoForm({addTask}) {
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