import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Register from "./pages/Auth/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Signin from "./pages/Auth/Signin";
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import AddTask from "./pages/AddTask/AddTask";
import UpdateTask from "./pages/UpdateTask/UpdateTask";
import AuthProvider from "./pages/Auth/AuthProvider";
import Logout from "./pages/Auth/Logout";
function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/add-task"
            element={
              <ProtectedRoute>
                <AddTask />
              </ProtectedRoute>
            }
          />
          <Route
            path="/update-task/:id"
            element={
              <ProtectedRoute>
                <UpdateTask />
              </ProtectedRoute>
            }
          />

          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
        <ToastContainer position="top-center" />
      </Router>
    </AuthProvider>
  );
}

export default App;
