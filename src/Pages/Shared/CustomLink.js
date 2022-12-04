import React from "react";
import { NavLink } from "react-router-dom";

const CustomLink = ({ to, children }) => {
  const activeStyle = {
    textDecoration: "underline"
  };
  const notActiveStyle = {
    textDecoration: "none"
  };

  return (
    <NavLink
      to={to}
      style={({ isActive }) => (isActive ? activeStyle : notActiveStyle)}
    >
      {children}
    </NavLink>
  );
};

export default CustomLink;
