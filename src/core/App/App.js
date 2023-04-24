import { ThemeProvider } from "styled-components";
import { PersonalHomepage } from "../../features/personalHomepage/PersonalHomepage";
import { selectDarkTheme } from "../../common/SwitchTheme/themeSlice";
import { useSelector } from "react-redux";
import { dark, light } from "../App/theme";
import { GlobalStyle } from "./GlobalStyle";

export const App = () => {
  const darkTheme = useSelector(selectDarkTheme);

  return (
    <ThemeProvider theme={darkTheme ? dark : light}>
      <GlobalStyle />
      <PersonalHomepage />
    </ThemeProvider>
  );
};

