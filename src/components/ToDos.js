import ToDoItem from "./ToDoItem";

function ToDos({tasks, deleteTask, toggleComplete, editTask, editingId, setEditingId}) {
    return(
        <section className="posted-todos-container flex center">
            {tasks.map((task) => 
                <ToDoItem
                    key={task.id}
                    task={task}
                    deleteTask={deleteTask}
                    editTask={editTask}
                    editingId={editingId === task.id}
                    setEditingId={setEditingId}
                    toggleComplete={toggleComplete}
                />
            )}
        </section>
    );
}

export default ToDos;