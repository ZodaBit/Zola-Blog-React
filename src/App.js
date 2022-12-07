
import Navbar from './Navbar';
import Home from './Home';
import { useEffect, useState } from 'react';
import LTodoList from './LTodoList';
function App() {
    
  const [inc, setInc]=useState(0);

  const IncNumber=()=>{
    setInc(pre=>pre+1);
  }
 
  
  return (
    <div className="App">
      <Navbar> <h1> what upd </h1></Navbar>
      <div className="content">
        <Home IncNumber={inc}/>
        <div>
          <button  onClick={IncNumber}>Clickme</button>
        </div>
        <div>
          <LTodoList/>
        </div>
      </div>
    </div>
  );
}

export default App;
