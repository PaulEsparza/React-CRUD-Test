import React, { useState } from 'react';
import CreateTask from './components/CreateTask';
import EditTask from './components/EditTask';
import ReadTasks from './components/ReadTasks';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [tasks, setTasks] = useState([
    { id: uuidv4(), responsable: "Ejemplo", description: "Ejemplo"},
    { id: uuidv4(), responsable: "Ejemplo2", description: "Ejemplo2"},
    { id: uuidv4(), responsable: "Ejemplo3", description: "Ejemplo3"}
  ]);

  const [editing, setEditing] = useState(false);

  const [currentTask, setCurrentTask] = useState({
    id: null, responsable: "", description: ""
  });

  const addTask = (task) => {
    task.id = uuidv4();
    setTasks([
      ...tasks,
      task])
  }

  const deleteTask = (id) => {
    const filter = tasks.filter(task => task.id !== id);
    setTasks(filter);
  }

  const editTask = (task) => {
    setEditing(true);
    setCurrentTask({
      id: task.id, responsable: task.responsable, description: task.description
    });
  }

  const updateTask = (updateTask, id) => {
    setEditing(false);
    setTasks(tasks.map(task => (task.id === id ? updateTask : task)));
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 mt-5">
          {
            !editing ? (
                <CreateTask addTask = {addTask}/>
            ) : (
                <EditTask currentTask = {currentTask} updateTask = {updateTask}/>
            )
          }
        </div>
        <div className="col-md-8 mt-5">
          <ReadTasks tasks = {tasks} deleteTask = {deleteTask} editTask = {editTask}/>
        </div>
      </div>
      
    </div>
  );
}

export default App;
