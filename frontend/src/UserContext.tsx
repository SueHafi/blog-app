import { createContext } from "react";

export const UserContext = createContext({
  firstName: "guest",
  lastName: "guest",
  userName: "guest",
});
