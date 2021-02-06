import { useSelector } from "react-redux";
const SavedTimes = () => {
  const savedTime = useSelector((state) => {
    return state.timer.savedTimes;
  });

  console.log(savedTime);

  const renderSavedTimes = savedTime.map((time) => {
    return <div>{time}</div>;
  });

  return <div>Saved Times{renderSavedTimes}</div>;
};

export default SavedTimes;
