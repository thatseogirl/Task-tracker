import { useState } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      text: "Doctors Appointment",
      day: "July 11th at 11:30am",
      reminder: true,
    },
    {
      id: "2",
      text: "Shopping",
      day: "July 14th at 1:30pm",
      reminder: false,
    },
    {
      id: "3",
      text: "Kids Appointment",
      day: "July 16th at 10:30am",
      reminder: true,
    },
    {
      id: "4",
      text: "Vaccination Appointment",
      day: "July 19th at 11:30am",
      reminder: false,
    },
  ]);

  const deleteTask = (delId) => {
    setTasks(tasks.filter((task) => task.id !== delId));
  };

  //Add task
  const addTask = (task) => {
    const getId = Math.floor(Math.random() * 10000) + 1
    const newTask = { getId, ...task}

    setTasks([...tasks, newTask])
  }

  //toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className='container'>
      <Header />
      <AddTask onAdd={addTask}/>
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "Add a Task"
      )}
    </div>
  );
}

export default App;
