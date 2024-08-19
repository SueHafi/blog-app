import { Outlet } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/Header";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { UserContext } from "./UserContext";
import { PostCountContext } from "./PostCountContext";
import { useState } from "react";

// const users = [{ name: "Sue" }, { name: "Spyros" }, { name: "Alice" }];

export default function Root() {
  const [postCount, setPostCount] = useState(null);
  const user = {
    firstName: "sue",
    lastName: "rose",
    userName: "suerose",
  };
  // const userGreetings = useMemo(() => {
  //   return users.map((user) => `Good morning, ${user.name}`);
  // }, [users]); // ['Good morning, Sue', 'Good morning, Spyros']

  return (
    <>
      <ThemeProvider theme={theme}>
        <PostCountContext.Provider value={postCount}>
          <UserContext.Provider value={user}>
            <CssBaseline />
            <Header />
            <Outlet context={setPostCount} />
          </UserContext.Provider>
        </PostCountContext.Provider>
      </ThemeProvider>
    </>
  );
}
