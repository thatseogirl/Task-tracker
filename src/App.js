import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [addedTask, setAddedTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTask = async () => {
      const taskFromServer = await fetchTask();
      setTasks(taskFromServer);
    };

    getTask();
  }, []);

  //fetch tasks
  const fetchTask = async () => {
    const respond = await fetch("http://localhost:5000/tasks");
    const data = await respond.json();
    return data;
  };

  //get single task for the toggle reminder
  const singleTask = async () => {
    const res = await fetch(`http://localhost:5000/tasks/$id}`);
    const singleData = await res.json();
    return singleData;
  };

  const deleteTask = async (id) => {
    //delete from backend
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });

    //delete from the ui
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //Add task
  const addTask = async (task) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      //because we are adding a task, we have to specify
      //an header to specify content type. and also outside
      //the headers set the body(the data we are sending to backend)

      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const data = await res.json();

    setTasks([...tasks, data]);
    // create an id without backend and also add new task
    // const id = Math.floor(Math.random() * 10000) + 1
    // console.log(id)
    // const newTask = { id, ...task }

    // setTasks([...tasks, newTask])
  };

  //toggle reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await singleTask(id);
    const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    const res = await fetch("http://localhost:5000/tasks/$id}", {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    });
    const data = await res.json();

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );

    // setTasks(
    //   tasks.map((task) =>
    //     task.id === id ? { ...task, reminder: !task.reminder } : task
    //   )
    // );
  };

  //edit task
  const editTask = (id) => {
    const newEdit = tasks.find((element) => {
      return element.id === id
    })
    console.log(newEdit)
  };

  return (
    <Router>
      <div className='container'>
        <Header onAdd={() => setAddedTask(!addedTask)} closeBtn={addedTask} />
        <Routes>
          <Route
            path='/'
            element={
              <>
                {addedTask && <AddTask onAdd={addTask} />}
                {tasks.length > 0 ? (
                  <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggle={toggleReminder}
                    editTask={editTask}
                  />
                ) : (
                  "Add a Task"
                )}
              </>
            }
          />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
