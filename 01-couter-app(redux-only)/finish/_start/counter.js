const { createStore } = require("redux");

// Redux
// -State
const initialState = {
  count: 0,
};
// -Action : JS object
const increment = {
  type: "INCREMENT" /* convention */,
};
const decrement = {
  type: "DECREMENT",
};
const reset = {
  type: "RESET",
};

const incrementByFive = {
  type: "INCREMENT_BY_FIVE",
  payload: 5,
};

// -Reducer : Logic base on ActionType
// Input: state , action
// Return : newState ( Do not Modify)
const counterReducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    // state.count += 1 (Do not modify)
    return { count: state.count + 1 };
  } else if (action.type === "DECREMENT") {
    return { count: state.count - 1 };
  } else if (action.type === "RESET") {
    return { count: 0 };
  } else if (action.type === "INCREMENT_BY_FIVE") {
    return { count: state.count + action.payload };
  }
  return state;
};
// -Store

const store = createStore(counterReducer);

// getState : ดูข้อมูลใน Store
console.log(store.getState());

// subscribe : ดูแค่  result
store.subscribe(() => {
  const state = store.getState();
  console.log("current state", state);
});

// Dispatch => syntax : dispatch(action)

store.dispatch(increment);
store.dispatch(increment);
store.dispatch(decrement);

store.dispatch(reset);
store.dispatch(incrementByFive)
console.log(store.getState());
