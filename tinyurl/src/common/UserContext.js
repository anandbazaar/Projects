import { createContext, useState } from "react";

export const UserContext = createContext({});
export const UserProvider = ({ children }) => {
  const token = localStorage.getItem("token")
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace("-", "+").replace("_", "/");
  const [user, setUser] = useState({...JSON.parse(atob(base64)), token })

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
