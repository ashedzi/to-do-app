import { useRef, useEffect, useState } from "react";
import ToDoItem from "./ToDoItem";

function ToDos({tasks, deleteTask, toggleComplete}) {
    return(
        <section className="posted-todos-container flex center">
            {tasks.map((task) => 
                <ToDoItem
                    key={task.id}
                    task={task}
                    deleteTask={deleteTask}
                    toggleComplete={toggleComplete}
                />
            )}
        </section>
    );
}

export default ToDos;