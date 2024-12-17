import { useSelector, useDispatch } from 'react-redux';

import './App.css';
import { useState } from 'react';

function App() {

  const dispatch = useDispatch();

  const state = useSelector((state) => state.value);


  const increas = () => {
    const action = {type : "increase", payload : 4};
    dispatch(action);
  }
  
  
  const decreas = () => {
    const action = {type : "decrease", payload : 2};
    dispatch(action);
  }

  const [myValue, setMyvalue] = useState(true);

  return (
    <div className="App">
      <h1>Hello Redux Basics</h1>
      <div className='counter'>Counter: {myValue && <span>{state}</span>}</div>
      
      <div>
        <button className='btn' onClick={increas}>increase +</button>
        <button className='btn' onClick={decreas}>decrease -</button>
      </div>
      <div>
        <button className='btn' onClick={() => setMyvalue(prev => !prev)}>Hid/show Counter Number</button>
      </div>
    </div>
  );
}

export default App;
