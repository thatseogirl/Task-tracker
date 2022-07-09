import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { MdOutlineModeEdit } from "react-icons/md";

export default function Task({ usersTask, deletedTask, onToggle, editTask }) {
    return (
        <div
            className={`task ${usersTask.reminder ? "reminder" : ""}`}
            onDoubleClick={() => onToggle(usersTask.id)}
        >
            <h3>
                {usersTask.text}
                <div>
                    <MdOutlineModeEdit
                        style={{ marginRight: "10px" }}
                        onClick={() => editTask(usersTask.id)}
                    />
                    <FaTimes
                        onClick={() => deletedTask(usersTask.id)}
                        style={{ color: "red", cursor: "pointer" }}
                    />
                </div>
            </h3>
            <p>{usersTask.day}</p>
        </div>
    );
}
