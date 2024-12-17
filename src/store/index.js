import { createStore } from "redux";



const initState = {value : 1, name : ''};

const counterReducer = (state = initState, action) => {
    if (action.type === "increase") {
        return {...state, value : state.value + action.payload };
    }

    if (action.type === "decrease") {
        return {...state, value : state.value - action.payload };
    }
    return state;
}

// app init -> run store -> action(non) -> counter reducer -> 0

const store = createStore(counterReducer);

export default store;
