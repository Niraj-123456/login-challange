import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Nav>
      <Logo>Logo</Logo>
      <NavMenu>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/services">Services</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </NavMenu>
      <Login>
        <Link to="/login">Login</Link>
      </Login>
      <Register>
        <Link to="/register">Register</Link>
      </Register>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  background-color: var(--button-secondary);
  padding: 10px;
  display: flex;
  align-items: center;
  color: var(--text-primary);
  letter-spacing: 3px;
`;

const Logo = styled.a`
  display: flex;
  font-size: 1.5rem;
  font-weight: 600;
  margin-left: 5em;
`;

const NavMenu = styled.ul`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
  margin-right: 20px;

  li {
    list-style: none;

    a {
      text-decoration: none;
      margin-inline: 1em;
      font-size: 1.2rem;
      color: var(--text-primary);
      position: relative;

      &:before {
        content: "";
        position: absolute;
        height: 3px;
        bottom: -17px;
        left: 0;
        right: 0;
        background: var(--button-primary);
        opacity: 0;
        transform: scaleX(0);
        transform-origin: left-center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }

      &:hover {
        &:before {
          transform: scaleX(1);
          opacity: 1;
        }
      }
    }
  }
`;

const Login = styled.button`
  outline: none;
  border: 0;
  padding: 0.4em;
  background-color: var(--button-primary);
  font-size: 1.2rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  a {
    color: var(--text-white);
  }

  :hover {
    transform: scale(1.1);
  }
`;

const Register = styled(Login)`
  background: var(--text-gray);
  margin: 0 20px;
`;
