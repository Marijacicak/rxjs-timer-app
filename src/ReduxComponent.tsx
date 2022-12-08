import React from "react";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { InitialState, userAction } from "./redux/userSlice";
import { toggleAction } from "./redux/toggleSlice";

interface PropsType {
  onDispatchTOggle: (T: boolean) => void;
}

export const ReduxComponent = (props: PropsType) => {
  const age = useAppSelector((state) => state.user.value.age);
  const name = useAppSelector((state) => state.user.value.name);
  const surname = useAppSelector((state) => state.user.value.surname);

  const toggleIsOn: boolean = useAppSelector(
    (state) => state.toggle.toggleIsOn
  );
  const dispatch = useAppDispatch();

  const NewData: InitialState = {
    value: {
      name: "Tonci",
      surname: "Toncev",
      age: 20,
    },
  };

  return (
    <div>
      <div>____</div>
      <div>Redux</div>
      <div>Name: {name}</div>
      <div>Surname: {surname}</div>
      <div>Age: {age}</div>
      <button onClick={() => dispatch(userAction(NewData))}>
        Click to Dispatch User
      </button>
      <button
        onClick={() => {
          dispatch(toggleAction());
          props.onDispatchTOggle(toggleIsOn);
        }}
      >
        Click to Dispatch Toggle
      </button>
    </div>
  );
};
