import React from "react";
import { FaTimes } from "react-icons/fa";

export default function Task({ usersTask, deletedTask, onToggle }) {
    return (
        <div
            className={`task ${usersTask.reminder ? "reminder" : ""}`}
            onDoubleClick={() => onToggle(usersTask.id)}
        >
            <h3>
                {usersTask.text}
                <FaTimes
                    onClick={() => deletedTask(usersTask.id)}
                    style={{ color: "red", cursor: "pointer" }}
                />
            </h3>
            <p>{usersTask.day}</p>
        </div>
    );
}
