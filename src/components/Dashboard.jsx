import React from "react";
import { Link } from "react-router-dom";

const Dashboard = ({ user }) => {
  return (
    <div className="dashboard">
      <p>Hello, {user.user.email}</p>
      <h1>This is user dashboard</h1>
      <button className="button">
        <Link to="/logout">Logout</Link>
      </button>
    </div>
  );
};

export default Dashboard;
