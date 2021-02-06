const initialState = {
  currentTime: "00:00:00",
  savedTimes: [],
};

function timerReducer(state = initialState, action) {
  const possibleActions = {
    "timer/saveCurrentTime": () => {
      return {
        ...state,
        savedTimes: [...state.savedTimes, action.payload],
      };
    },
  };

  const currentAction = possibleActions[action.type];

  return currentAction ? currentAction() : state;
}
export default timerReducer;
