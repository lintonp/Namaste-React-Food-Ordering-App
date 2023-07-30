import { createContext } from "react";

const userContext = createContext({
  loggedinUser: "Default User",
});

export default userContext;
