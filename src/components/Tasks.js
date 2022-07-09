import React from "react";
import Task from "./Task";

export default function Tasks({ tasks, onDelete, onToggle, editTask }) {
    return (
        <>
            {tasks.map((task) => (
                <Task
                    key={task.id}
                    usersTask={task}
                    deletedTask={onDelete}
                    onToggle={onToggle}
                    editTask={editTask}
                />
            ))}
        </>
    );
}
