import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Form from "./components/Form";
import Dashboard from "./components/Dashboard";
import NotFound from "./components/NotFound";
import Logout from "./components/Logout";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import { selectUser } from "./features/auth/userSlice";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const user = useSelector(selectUser);
  return (
    <Router>
      <div className="App">
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route path="/login" element={<Form path="/login" />} />
          <Route path="/register" element={<Form path="/register" />} />
          <Route path="/dashboard" element={<Dashboard user={user} />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
