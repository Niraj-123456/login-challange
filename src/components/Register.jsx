import React, { useState } from "react";
import styled from "styled-components";

const Register = () => {
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleChange = ({ currentTarget }) => {
    setState({
      ...state,
      [currentTarget.name]: currentTarget.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <RegisterForm>
      <Heading>Register</Heading>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="username">UserName</label>
        <input
          type="text"
          name="username"
          id="username"
          value={state.username}
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          value={state.email}
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={state.password}
          onChange={handleChange}
        />
        <label htmlFor="confirmpassword">Confirm Password</label>
        <input
          type="password"
          name="confirmpassword"
          id="confirmpassword"
          value={state.confirmpassword}
          onChange={handleChange}
        />
        <button type="submit" className="button primary">
          Register
        </button>
      </Form>
      <a href="#">Already Have an account?</a>
    </RegisterForm>
  );
};

export default Register;

const RegisterForm = styled.div`
  width: 466px;
  height: auto;
  margin: auto;

  a {
    display: block;
    padding-block: 10px;
    text-align: center;
  }
`;

const Heading = styled.h1`
  font-size: 48px;
  font-weight: 600;
  line-height: 57px;
  margin-bottom: 40px;
`;

const Form = styled.form`
  button {
    margin-top: 20px;
  }
`;
