import React, { useState } from 'react';


function App() {
  const [ tasks, setTasks ] = useState([]);
  // const [ showTasks, setShowTasks ] = useState(false);
    console.log(tasks);


function AddTask({ setTasks, tasks }) {
  const [ value, setValue ] = useState('');
 


  function insertTask() {
    console.log('clicked');


    setTasks([...tasks, { text:value, id:Date.now() }]);
    // setShowTasks(true);
  }
  return (
    <>
      <input onChange={(e) => setValue(e.target.value)} type="textarea" />
      <button onClick={insertTask}>Add it!</button>
    </>
  );
}


function List({ tasks }) {
  let tasksArray = tasks.map(task => {
    return(
      <>
        <li key={task.id}>
          <input type="checkbox" />
          {task.text}
          <button>X</button>
        </li>
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
    {/* <List tasks={tasks} /> */}
    {tasks.length > 0 ? <List tasks={tasks} /> : <p>All caught up!</p>}
    {/* {showTasks ? <p>We have some things to do...</p> : <p>All caught up!</p>} */}
    <p>I have {tasks.length} things to get done...</p>

  </>
);
}



export default App;
