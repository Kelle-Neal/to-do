import React, { useState } from 'react';
import { ButtonGroup } from 'react-bootstrap';


function App() {
  const [ tasks, setTasks ] = useState([]);
  const [ display, setDisplay ] = useState([]);

  // const [ showTasks, setShowTasks ] = useState(false);
    console.log(tasks);

//*********ADD NEW TASK **********/

function AddTask({ setTasks, tasks }) {
  const [ value, setValue ] = useState('');
 
//**********INSERT NEW TASK WHEN BUTTON CLICKED**********/

  function insertTask() {
    setTasks([...tasks, { text:value, id:Date.now(), status:"active"}]);
    console.log(tasks);
    // setShowTasks(true);
  }
  return (
    <>
      <input onChange = {(e) => setValue(e.target.value)} type="textarea" />
      <button onClick = {insertTask}>Add it!</button>
    </>
  );
}

//***************FILTER BUTTON GROUP****************/


//***************DISPLAY FILTERED TASKS***********/
    let filterDisplay = tasks;
      if (display === "active") {
        filterDisplay = tasks.filter((tasks) => tasks.status === "active");
      }
      else if (display === "completed") {
        filterDisplay = tasks.filter((tasks) => tasks.status === "completed");
      }
      else if (display === "all") {
        filterDisplay = tasks;
      }  
        console.log(display);
  



//***************CHANGE TASK STATUS****************/

// function changeStatus(e, selectedId) {
//   setTasks
// }







//******************CREATE LIST OF TASKS *****************/

function List({ tasks }) {

  const deleteById = id => {
    setTasks(oldValues => {
      return oldValues.filter(task => task.id !== id)
    })
  }
    let tasksArray = tasks.map(task => {
      return(
        <>
          <li key={task.id}>
            <input 
              type="checkbox"
              status="active"

            />
            {task.text}
            <button onClick = {() => deleteById(task.id)}>X</button>
          </li>

          <ButtonGroup>
            <>
            <button onClick={(e) => {
              setDisplay(e.target.status = "active");
              filterDisplay();
            }}>
              Tasks to be done
            </button>

            <button onClick={(e) => {
              setDisplay(e.target.status = "all");
              filterDisplay();
            }}>
              All Tasks
            </button>

            <button onClick={(e) => {
              setDisplay(e.target.status = "completed");
              filterDisplay();
            }}>
              Completed Tasks
            </button>
            </>
          </ButtonGroup>
        </>
      );
    })

  return (
      <ul>
        {tasksArray}
      </ul>
  );
}



return (
  <>      
    <h1>Stuff I need to do...</h1>
    <AddTask setTasks={setTasks} tasks={tasks} />
    {tasks.length > 0 ? <List tasks={tasks} /> : <p>All caught up!</p>}
    <p>I have {tasks.length} things to get done...</p>

  </>
);
}



export default App;
