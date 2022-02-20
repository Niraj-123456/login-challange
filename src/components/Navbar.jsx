import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Nav>
      <Logo>Logo</Logo>
      <NavMenu>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
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
  padding: 12px;
  display: flex;
  align-items: center;
  color: var(--text-primary);
  letter-spacing: 3px;
`;

const Logo = styled.a`
  display: flex;
  font-size: 1.8rem;
  font-weight: 600;
  margin-left: 3em;
  color: var(--button-primary);
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
        bottom: -19px;
        left: 0;
        right: 0;
        background: var(--button-primary);
        opacity: 0;
        transform: scaleX(0);
        transform-origin: left-center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }

      &.active,
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
