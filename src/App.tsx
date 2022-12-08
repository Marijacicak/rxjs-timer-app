import "./App.css";
import { Timer } from "./Timer";
import { TimerActionTrigger } from "./TimerActionTrigger";
import { TimerReducer } from "./TimerReducer";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ReduxComponent } from "./ReduxComponent";
import ThemeContext, { themeStyles } from "./theme/themeContext";
import { useState } from "react";

function App() {
  const [usedTheme, setUsedTheme] = useState(themeStyles.olive);

  const dispatchToggleHandler = (toggleIsOn: boolean) => {
    toggleIsOn
      ? setUsedTheme(themeStyles.gray)
      : setUsedTheme(themeStyles.olive);
  };

  // a sta je ovo onda???
  //const themeStyle = useContext(ThemeContext);

  return (
    <ThemeContext.Provider value={usedTheme}>
      <Provider store={store}>
        <div className="App">
          <header className="App-header" style={usedTheme}>
            <Timer />
            <TimerActionTrigger />
            <ReduxComponent onDispatchTOggle={dispatchToggleHandler} />
            <TimerReducer />
          </header>
        </div>
      </Provider>
    </ThemeContext.Provider>
  );
}

export default App;
