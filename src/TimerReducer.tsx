import { useReducer, useRef } from "react";

enum ACTION {
  SET_TIMER = "setTimer",
  SET_RESET = "setReset",
}

interface IAction {
  type: ACTION;
}

interface IState {
  counter: number;
}

const reducer = (state: IState, action: IAction) => {
  const { type } = action;
  switch (type) {
    case ACTION.SET_TIMER:
      return {
        counter: state.counter + 1,
      };

    case ACTION.SET_RESET:
      return {
        ...state,
        counter: 0,
      };

    default:
      return state;
  }
};

export const TimerReducer = () => {
  const intervalId = useRef<NodeJS.Timer | undefined>();
  const [state, dispatch] = useReducer(reducer, {
    counter: 0,
  });

  const startHandler = () => {
    if (intervalId != null) {
      clearInterval(intervalId.current);
    }
    intervalId.current = setInterval(() => {
      dispatch({ type: ACTION.SET_TIMER });
    }, 1000);
  };
  const resetHandler = () => {
    dispatch({ type: ACTION.SET_RESET });
  };
  const pauseHandler = () => {
    if (intervalId != null) {
      clearInterval(intervalId.current);
    }
  };

  return (
    <>
      <div>___</div>
      <div>TimerReducer</div>
      <button onClick={startHandler}>Start</button>
      <button onClick={pauseHandler}>Pause</button>
      <button onClick={resetHandler}>Reset</button>
      <div>Counter - useReducer: {state.counter}</div>
    </>
  );
};
