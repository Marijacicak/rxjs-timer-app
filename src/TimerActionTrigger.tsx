import { useState, useRef } from "react";

export const TimerActionTrigger = () => {
  const [counter, setCounter] = useState<number>(0);
  const intervalId = useRef<NodeJS.Timer>();

  const startHandler = () => {
    // Clear Interval if exists....
    if (intervalId.current != null) {
      clearInterval(intervalId.current);
    }
    // Set New Interval...
    intervalId.current = setInterval(() => {
      setCounter((x) => x + 1);
    }, 1000);
  };
  const pauseHandler = () => {
    // Clear Interval
    clearInterval(intervalId.current);
  };
  const resetHandler = () => {
    // Set Counter to 0...
    setCounter(0);
  };
  return (
    <div>
      <div>___</div>
      <div>Without useEffect</div>
      <button onClick={startHandler}>Start</button>
      <button onClick={pauseHandler}>Pause</button>
      <button onClick={resetHandler}>Reset</button>
      <div>Counter - useState: {counter}</div>
    </div>
  );
};
