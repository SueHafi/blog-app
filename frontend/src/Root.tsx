import { Outlet } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/Header";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export default function Root() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Outlet />
      </ThemeProvider>
    </>
  );
}
