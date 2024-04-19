import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const checkStatus = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/auth/status",
          {
            withCredentials: true,
          }
        );
        console.log("respons :", response.data);
        setIsLoggedIn(response.data.isAuthenticated);
      } catch (error) {
        console.log("Error fetching authenticated status: ", error);
      }
    };
    checkStatus();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
export { AuthContext };
