import ToDoItem from "./ToDoItem";

function ToDos({tasks, dispatch, editingId}) {
    return(
        <section className="posted-todos-container flex center">
            {tasks.map((task) => 
                <ToDoItem
                    key={task.id}
                    task={task}
                    dispatch={dispatch}
                    isEditing={editingId === task.id}
                />
            )}
        </section>
    );
}

export default ToDos;