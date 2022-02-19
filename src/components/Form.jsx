import React from "react";
import Login from "./Login";
import Register from "./Register";

function Form({ path }) {
  console.log(path);
  return (
    <div className="form-container">
      <div className="form-wrapper">
        {path && path === "/login" ? <Login /> : <Register />}
        <div className="login-bg-image">
          <img
            src="/assets/Images/Login & Registration/unsplash_F1I4IN86NiE.png"
            alt="login-bg"
          />
        </div>
      </div>
    </div>
  );
}

export default Form;
