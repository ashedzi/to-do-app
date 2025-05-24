import ToDoItem from "./ToDoItem";

function ToDos({tasks, deleteTask, toggleComplete, setEditingId}) {
    return(
        <section className="posted-todos-container flex center">
            {tasks.map((task) => 
                <ToDoItem
                    key={task.id}
                    task={task}
                    deleteTask={deleteTask}
                    setEditingId={setEditingId}
                    toggleComplete={toggleComplete}
                />
            )}
        </section>
    );
}

export default ToDos;