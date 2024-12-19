import { useSelector, useDispatch } from 'react-redux';
import './App.css';

function App() {

  const dispatch = useDispatch();

  const counterState = useSelector((state) => state.value);

  const increas = () => {
    const action = {type : "increase", payload : 4};
    dispatch(action);
  }

  const decreas = () => {
    const action = {type : "decrease", payload : 2};
    dispatch(action);
  }

  const toggleCounter = () => {
    dispatch({type : 'toggleCounter'});
  }

  const toggleState = useSelector((state) => state.showCounter)

  return (
    <div className="App">
      <h1>Hello Redux Basics</h1>

      {
        toggleState && 
          <>
            <div className='counter'>Counter: {counterState}</div>          
            <div>
              <button className='btn' onClick={increas}>increase +</button>
              <button className='btn' onClick={decreas}>decrease -</button>
            </div>
          </>
      }

      <div>
        <button className='btn' onClick={toggleCounter}>Hid/show Counter Number</button>
      </div>
    </div>
  );
}

export default App;
