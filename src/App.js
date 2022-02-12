import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Logout from "./components/Logout";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import { selectUser } from "./features/auth/userSlice";
import Dashboard from "./components/Dashboard";
import NotFound from "./components/NotFound";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const user = useSelector(selectUser);
  return (
    <Router>
      <div className="App">
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard user={user} />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
