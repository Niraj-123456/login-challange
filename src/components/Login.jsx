import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogin } from "../services/authServices";
import { login } from "../features/auth/userSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Formik } from "formik";
import * as Yup from "yup";

function Login() {
  const [error, setError] = useState(null);
  const [toggled, setToggled] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    setError(null);
    try {
      const { data: user } = await userLogin(
        values.phoneNumber,
        values.password
      );
      dispatch(
        login({
          user: user.data.user,
        })
      );
      navigate("/dashboard");
    } catch (ex) {
      setError(ex.response.data.message);
      // if (ex.response && ex.response.status === 400) {
      //   setError(ex.response.data.message);
      // }
    }
  };

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const LoginSchema = Yup.object().shape({
    phoneNumber: Yup.string()
      .matches(phoneRegExp, "Phone number is not valid")
      .min(10)
      .max(10)
      .required("Phone Number Required"),
    password: Yup.string().required("Password Required"),
  });

  const toggleEyeIcon = () => {
    setToggled(!toggled);
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="login-form">
          {error ? (
            <li style={{ color: "red", fontSize: "12px", marginBottom: "1em" }}>
              {error}
            </li>
          ) : (
            ""
          )}
          <h1>Login</h1>
          <Formik
            initialValues={{
              phoneNumber: "",
              password: "",
            }}
            validationSchema={LoginSchema}
            onSubmit={(values, { setSubmitting }) => {
              handleSubmit(values);
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
              <form onSubmit={handleSubmit}>
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  className="form-input"
                  type="number"
                  name="phoneNumber"
                  id="phoneNumber"
                  value={values.phoneNumber}
                  placeholder="Enter phone number"
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {errors.phoneNumber && touched.phoneNumber && (
                  <div className="field-error">{errors.phoneNumber}</div>
                )}
                <label htmlFor="password">Password</label>
                <input
                  className="form-input"
                  type={toggled ? "text" : "password"}
                  name="password"
                  id="password"
                  value={values.password}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />

                <FontAwesomeIcon
                  onClick={toggleEyeIcon}
                  className="eye-icon"
                  icon={toggled ? faEye : faEyeSlash}
                />

                {errors.password && touched.password && (
                  <div className="field-error">{errors.password}</div>
                )}
                <input
                  className="form-input"
                  type="checkbox"
                  id="rememberPhoneNumber"
                  name="rememberPhoneNumber"
                  value="remember"
                />
                <label htmlFor="rememberPhoneNumber">
                  Remember my phone number.
                </label>
                <a href="#">Forgot Password?</a>
                <button
                  className="button primary"
                  type="submit"
                  disabled={isSubmitting || !dirty}
                >
                  Submit
                </button>
              </form>
            )}
          </Formik>
          <a className="no-account" href="#">
            Don't have an account yet?
          </a>
          <button className="button secondary">Create Account</button>
        </div>
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

export default Login;
