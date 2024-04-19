import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Logout() {
  const navigate = useNavigate();
  useEffect(() => {
    const handleLogout = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/auth/logout",
          {
            withCredentials: true,
          }
        );
        if (response.status === 200) {
          console.log("Logout Success!");
          navigate("/");
        }
      } catch (error) {
        console.log("Error logging out: ", error);
      }
    };
    handleLogout();
  }, []);
  return <div>Logging Out...</div>;
}

export default Logout;
