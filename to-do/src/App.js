import React, { useState } from 'react';
import { ButtonGroup } from 'react-bootstrap';
import './App.css';


function App() {
  const [tasks, setTasks] = useState([]);
  const [display, setDisplay] = useState("active");
  // const [ showTasks, setShowTasks ] = useState(false);
  console.log(tasks);


  //***************DISPLAY FILTERED TASKS***********/
  let filterDisplay = tasks;
  if (display === "active") {
    filterDisplay = tasks.filter((tasks) => tasks.done === false);
  }
  else if (display === "completed") {
    filterDisplay = tasks.filter((tasks) => tasks.done === true);
  }
  else if (display === "all") {
    filterDisplay = tasks;
  }
  console.log(display);

  return (
    <>
      <h1>Stuff I need to do...</h1>
      <p>I have {tasks.length} things to get done...</p>

      <AddTask setTasks={setTasks} tasks={tasks} />
      {tasks.length > 0 ? <List tasks={filterDisplay} setTasks={setTasks} setDisplay={setDisplay} /> : <p>All caught up!</p>}

    </>
  );
}
//************END APP*********/


//*********ADD NEW TASK **********/

function AddTask({ setTasks, tasks }) {
  const [value, setValue] = useState('');
  // const [state, setState] = useState('');

  //**********INSERT NEW TASK WHEN BUTTON CLICKED**********/

  function insertTask() {
    setTasks([...tasks, { text: value, id: Date.now(), done: false }]);
    console.log(tasks);
    }
  return (
    <>
      <input onChange={(e) => 
        setValue(e.target.value)} type="textarea" />
      <button onClick= {insertTask}>Add it!</button>
      
    </>
  );
}

function List({ setTasks, tasks, setDisplay }) {

  const deleteById = id => {
    setTasks(oldValues => {
      return oldValues.filter(task => task.id !== id)
    })
  }
  const updateStatus = (id, checked) => {
    setTasks(oldValues => {
      return oldValues.map(task => task.id === id ? { ...task, done:checked } : task)

    })
  }

  let tasksArray = tasks.map(task => {
    return (
      <>
        <li key={task.id}>
          <input
            type="checkbox"
            checked={task.done}
            onChange={(e) => updateStatus(task.id, e.target.checked)}
          />
          {task.text}
          <button onClick={() => deleteById(task.id)}>X</button>
        </li>


      </>
    );
  })

  return (
    <>
      <ul>
        {tasksArray}
      </ul>
      <ButtonGroup>
        <>
          <button onClick={(e) => {
            setDisplay("active");
          }}>Tasks to be done</button>

          <button onClick={(e) => {
            setDisplay("all");
          }}>All Tasks</button>

          <button onClick={(e) => {
            setDisplay("completed");
          }}>Completed Tasks</button>
        </>
      </ButtonGroup>
    </>
  );
}


export default App;
