import { createContext } from "react";

export const themeStyles = {
  olive: {
    backgroundColor: "#808000",
  },
  gray: {
    backgroundColor: "#282c34",
  },
};

const ThemeContext = createContext(themeStyles.olive);

export default ThemeContext;
