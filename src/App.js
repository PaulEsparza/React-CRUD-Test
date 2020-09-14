import React, { useState } from 'react';
import CreateTask from './components/CreateTask';
import ReadTasks from './components/ReadTasks';

function App() {

  const [tasks, setTasks] = useState([
    { id: 1, responsable: "Ejemplo", description: "Ejemplo"},
    { id: 2, responsable: "Ejemplo2", description: "Ejemplo2"},
    { id: 3, responsable: "Ejemplo3", description: "Ejemplo3"}
  ]);

  const addTask = (task) => {
    task.id = tasks.length + 1;
    setTasks([
      ...tasks,
      task])
  }

  const deleteTask = (id) => {
    console.log(id);
    const filter = tasks.filter(task => task.id !== id);
    setTasks(filter);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 mt-5">
          <CreateTask addTask = {addTask}/>
        </div>
        <div className="col-md-8 mt-5">
          <ReadTasks tasks = {tasks} deleteTask = {deleteTask}/>
        </div>
      </div>
      
    </div>
  );
}

export default App;
