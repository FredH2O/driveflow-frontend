import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { getToken, clearAuth } from "../utils/auth";

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(!!getToken());

  function login() {
    setIsAuthenticated(true);
  }

  function logout() {
    clearAuth();
    setIsAuthenticated(false);
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
