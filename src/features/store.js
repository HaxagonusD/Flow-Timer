import { createStore, combineReducers } from "redux";
import timerReducer from "../features/timer/reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  combineReducers({ timer: timerReducer }),
  composeWithDevTools()
);

store.subscribe(() => {
  console.log(store.getState());
});

export default store;
