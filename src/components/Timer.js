import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { saveCurrentTime } from "../features/timer/actions";
const Timer = () => {
  const dispatch = useDispatch();
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  const startTimer = () => {
    setIsActive(true);
    setIsPaused(false);
    intervalRef.current = setInterval(() => {
      setSeconds((seconds) => {
        return seconds + 1;
      });
    }, 1000);
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setSeconds(0);
  };

  const formatTime = () => {
    const getSeconds = seconds % 60;
    const getMinute = Math.floor(seconds / 60);
    return `0${getMinute}:0${getSeconds}`;
  };

  const handleSaveTime = () => {
    dispatch(saveCurrentTime(formatTime()));
  };

  // const { smallMillis, seconds } = formatTime();
  return (
    <div className="App">
      {formatTime()}
      <button onClick={startTimer}>Start</button>
      <button onClick={resetTimer}>Reset</button>
      <button onClick={handleSaveTime}>Save time</button>
    </div>
  );
};

export default Timer;
