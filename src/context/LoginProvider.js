import React, { createContext, useState } from "react";

export const LoginContext = createContext(null);

function LoginContextProvider({ children }) {
  const [isLogin, toggleLogin] = useState(false);

  return (
    <LoginContext.Provider value={{ isLogin, toggleLogin }}>
      {children}
    </LoginContext.Provider>
  );
}

export default LoginContextProvider;
