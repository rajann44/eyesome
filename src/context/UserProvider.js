import React, { createContext, useContext, useState } from "react";

export function UserProvider(props) {
  // you can insert some code that calculates and changes the value of the context here

  return (
    <UserContext.Provider value={{}}>
      {" "}
      //here you can provide a new value for the context
      {props.children}
    </UserContext.Provider>
  );
}

export default UserProvider;
export const UserContext = createContext();
