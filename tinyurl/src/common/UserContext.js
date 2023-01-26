import { createContext, useState } from "react";
import jwt_decode from "jwt-decode";

export const UserContext = createContext({});
export const UserProvider = ({ children }) => {
  const token = localStorage.getItem("token");
  var decoded;
  if (token !== "null") decoded = jwt_decode(token);
  else decoded = null;

  return (
    <UserContext.Provider value={decoded}>{children}</UserContext.Provider>
  );
};
