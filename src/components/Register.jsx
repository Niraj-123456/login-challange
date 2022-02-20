import React, { useState } from "react";
import styled from "styled-components";
import { Formik } from "formik";
import * as Yup from "yup";

const Register = () => {
  const registerSchema = Yup.object().shape({
    username: Yup.string().required("Username required"),
    email: Yup.string().required("Email required"),
    password: Yup.string().required("Password required"),
    confirmpassword: Yup.string().required("Confirm Password required"),
  });
  return (
    <RegisterForm>
      <Heading>Register</Heading>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          confirmpassword: "",
        }}
        validationSchema={registerSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          dirty,
          handleBlur,
          handleSubmit,
          handleChange,
          isSubmitting,
        }) => (
          <Form onSubmit={handleSubmit}>
            <label htmlFor="username">UserName</label>
            <input
              type="text"
              name="username"
              id="username"
              value={values.username}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errors.username && touched.username && (
              <div>{errors.username}</div>
            )}
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              value={values.email}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errors.email && touched.email && <div>{errors.email}</div>}
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={values.password}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errors.password && touched.password && (
              <div>{errors.password}</div>
            )}
            <label htmlFor="confirmpassword">Confirm Password</label>
            <input
              type="password"
              name="confirmpassword"
              id="confirmpassword"
              value={values.confirmpassword}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errors.confirmpassword && touched.confirmpassword && (
              <div>{errors.confirmpassword}</div>
            )}
            <button
              type="submit"
              className="button primary"
              disabled={isSubmitting || !dirty}
            >
              Register
            </button>
          </Form>
        )}
      </Formik>
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
    text-align: center;
    margin-top: 20px;
    color: var(--link-primary);
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
