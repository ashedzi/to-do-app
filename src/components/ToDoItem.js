import Icons from "./Icons";

function ToDoItem({task, dispatch}) {
    return(
        <div className="todo-container">
            <div className="done-indicator"></div>
            <div className=" flex column gap-20">
                <div className="flex gap-10 align-center">
                    <input 
                        type='checkbox' 
                        checked={task.completed} 
                        onChange={() => dispatch({ type: "TOGGLE_COMPLETE", payload: task.id })}
                    />
                    <h3 className={task.completed ? "completed" : ""}>{task.name}</h3>
                 </div>
                <div className="flex space-between">
                    <p>{task.date}</p>
                    <Icons 
                        onDelete={() => dispatch({ type: "DELETE_TASK", payload: task.id })} 
                        onEdit={() => dispatch({ type: "START_EDITING", payload: task.id })}
                    />
                </div>
            </div>
        </div>
    );
}

export default ToDoItem;