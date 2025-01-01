import { useSelector, useDispatch } from 'react-redux';


// actions
import {increase, decrease} from '../store/countSlice';
import { logIn, logOut } from '../store/authSlice';

const Counter = () => {

  const globalState = useSelector((state) => {
    console.log(state.counter.value);
    return state;
  });
  const dispatch = useDispatch();

  const isLoggedIn = () => {
    return globalState.auth.isLoggedIn;
  }

  const loginHandler = (state) => {
    state ? dispatch(logOut()) : dispatch(logIn());
  }

  return (
    <div className="App">
      <h1>Hello Redux Basics</h1>

      {
        isLoggedIn() && (
          
            <>
              <div className='counter'>Counter: {globalState.counter.value}</div>          
              <div>
                <button className='btn' onClick={() => dispatch(increase(5))}>increase +</button>
                <button className='btn' onClick={() => dispatch(decrease(2))}>decrease -</button>
              </div>
            </>
        )
      }

      <div>
        <button className='btn' onClick={() => loginHandler(isLoggedIn())}>
          {isLoggedIn() ? 'Logout' : 'LogIn'}
        </button>
      </div>
    </div> );
}

export default Counter;
