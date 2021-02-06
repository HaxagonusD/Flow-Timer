export const saveCurrentTime = (payload) => {
  return {
    type: "timer/saveCurrentTime",
    payload,
  };
};
