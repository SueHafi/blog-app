import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
// import Home from "./components/Home";
import Article from "./components/Article";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#af52bf",
      main: "#9c27b0",
      dark: "#6d1b7b",
      contrastText: "#fff",
    },
    secondary: {
      light: "#834bff",
      main: "#651fff",
      dark: "#4615b2",
      contrastText: "#fff",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <Home/> */}
      <Article></Article>
    </ThemeProvider>
  );
}

export default App;
