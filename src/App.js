import React, { useState } from 'react';
import ReadTasks from './components/ReadTasks';

function App() {

  const [tasks, setTasks] = useState([
    { id: 1, responsable: "Ejemplo", description: "Ejemplo"},
    { id: 2, responsable: "Ejemplo2", description: "Ejemplo2"},
    { id: 3, responsable: "Ejemplo3", description: "Ejemplo3"}
  ]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <h1>HOla</h1>
        </div>
        <div className="col-md-8">
          <ReadTasks tasks = {tasks}/>
        </div>
      </div>
      
    </div>
  );
}

export default App;
