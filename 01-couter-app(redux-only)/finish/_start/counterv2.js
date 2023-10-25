const { createStore } = require("redux");

// Redux
// -State
const initialState = {
  count: 0,
};
// -Action : JS object
// ActionType constant
const INCREMENT = "INCREMENT";
const increment = {
  type: INCREMENT /* convention */,
};

// Action Creator
const incrementAction = () => {
  return {
    type: INCREMENT,
  };
};

const DECREMENT = "DECREMENT";
const decrement = {
  type: DECREMENT,
};

const decrementAction = () => {
  return {
    type: DECREMENT,
  };
};

const RESET = "RESET";
const reset = {
  type: RESET,
};

const resetAction = () => {
  return {
    type: RESET,
  };
};

const INCREMENT_BY_FIVE = "INCREMENT_BY_FIVE";
const incrementByFive = {
  type: INCREMENT_BY_FIVE,
  payload: 5,
};

const INCREMENT_BY = "INCREMENT_BY";
const incrementByAction = (amount) => {
  return {
    type: INCREMENT_BY,
    payload: amount,
  };
};
const DECREMENT_BY = "DECREMENT_BY";
const decrementByAction = (amount) => {
  return {
    type: DECREMENT_BY,
    payload: amount,
  };
};

// -Reducer : Logic base on ActionType
// Input: state , action
// Return : newState ( Do not Modify)
const counterReducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    // state.count += 1 (Do not modify)
    return { count: state.count + 1 };
  } else if (action.type === DECREMENT) {
    return { count: state.count - 1 };
  } else if (action.type === RESET) {
    return { count: 0 };
  } else if (action.type === INCREMENT_BY_FIVE) {
    return { count: state.count + action.payload };
  } else if (action.type === INCREMENT_BY) {
    return { count: state.count + action.payload };
  } else if (action.type === DECREMENT_BY) {
    return { count: state.count - action.payload };
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

store.dispatch(increment); //dispatch(action)
store.dispatch(incrementAction()); //dispatch(actionCreator())
store.dispatch(decrementAction());
store.dispatch(decrementAction());
store.dispatch(decrementAction());
store.dispatch(resetAction());
store.dispatch(incrementByAction(42));
store.dispatch(decrementByAction(20))


// Dispatch => syntax : dispatch(action)
