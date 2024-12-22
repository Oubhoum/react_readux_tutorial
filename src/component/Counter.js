import { useSelector, useDispatch } from 'react-redux';
import { useCallback, useEffect } from 'react';


const Counter = () => {
    
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state);

  const handlerCounterValue = (value) => {
    if (value < 1) {
          return 'no number';
        }
        return value;
  }

  const counterOperation = useCallback((type, payload) => {
    dispatch({type, payload});
  }, [dispatch]);

  useEffect(() => counterOperation('increase', 10), [counterOperation]);

  const toggleCounter = () => {
    dispatch({type : 'toggleCounter'});
  }

  return (
    <div className="App">
      <h1>Hello Redux Basics</h1>

      {
        globalState.showCounter && 
          <>
            <div className='counter'>Counter: {handlerCounterValue(globalState.value)}</div>          
            <div>
              <button className='btn' onClick={() => counterOperation('increase', 4)}>increase +</button>
              <button className='btn' onClick={() => counterOperation('decrease', 2)}>decrease -</button>
            </div>
          </>
      }

      <div>
        <button className='btn' onClick={toggleCounter}>Hid/show Counter Number</button>
      </div>
    </div> );
}

export default Counter;