import Icons from "./Icons";
import { useRef, useEffect, useState } from "react";

function ToDoItem({task, deleteTask, toggleComplete, editTask}) {
    return(
        <div className="todo-container">
            <div className="done-indicator"></div>
            <div className=" flex column gap-20">
                <div className="flex gap-10 align-center">
                    <input type='checkbox' checked={task.completed} onChange={() => toggleComplete(task.id)}/>
                    <h3 className={task.completed ? "completed" : ""}>{task.name}</h3>
                </div>
                <div className="flex space-between">
                    <p>{task.date}</p>
                    <Icons onDelete={() => deleteTask(task.id)} onEdit={() => editTask(task.id, task.newName)}/>
                </div>
            </div>
        </div>
    );
}

export default ToDoItem;