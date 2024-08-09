import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
// import HomePage from "./components/HomePage";
import ArticlePage from "./components/ArticlePage";
// import LoginPage from "./components/LoginPage";
// import NewBlogPage from "./components/NewBlogPage";
import Header from './components/Header';
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
      <Header/>
      {/* <HomePage/> */}
      <ArticlePage/>
      {/* <LoginPage/> */}
      {/* <NewBlogPage/> */}
    </ThemeProvider>
  );
}

export default App;
