import { useState, useEffect, useRef } from "react";
import { interval, Subscription } from "rxjs";

export const Timer = () => {
  const [counter, setCounter] = useState<number>(0);
  const [startTimer, setStartTimer] = useState<boolean>(false);
  //const [intervalId, setintervalId] = useState<NodeJS.Timer>();
  const [counterRxjs, setCounterRxjs] = useState<number>(0);
  const subscription = useRef<Subscription>();
  const intervalId = useRef<NodeJS.Timer>();

  //useState
  useEffect(() => {
    if (startTimer) {
      const int = setInterval(() => {
        setCounter((x) => x + 1);
      }, 1000);
      intervalId.current = int;
    } else {
      clearInterval(intervalId.current);
    }
  }, [startTimer]);
  //setTimeout( function() { alert("Your session will expire in 5 minutes."); }, 10*60*1000); ako je timer na 15

  //observable
  useEffect(() => {
    if (startTimer) {
      subscription.current = interval(1000).subscribe((x) =>
        setCounterRxjs((y) => y + 1)
      );
    } else {
      subscription.current?.unsubscribe();
    }
  }, [startTimer]);

  return (
    <div>
      <div>With useEffect</div>
      <button
        onClick={() => {
          setStartTimer(true);
        }}
      >
        Start
      </button>
      <button
        onClick={() => {
          setStartTimer(false);
        }}
      >
        Pause
      </button>
      <button
        onClick={() => {
          setCounter(0);
          setCounterRxjs(0);
        }}
      >
        Reset
      </button>
      <div>Counter - useState: {counter}</div>
      <div>Counter - observable: {counterRxjs}</div>
    </div>
  );
};
