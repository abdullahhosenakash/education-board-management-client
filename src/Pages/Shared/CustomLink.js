import React from 'react';
import { NavLink } from 'react-router-dom';

const CustomLink = ({ to, children }) => {
  const activeStyle = {
    borderBottom: '2px solid white',
    fontWeight: 'bold'
  };
  return (
    <NavLink
      to={to}
      className='text-white text-decoration-none'
      style={({ isActive }) => (isActive ? activeStyle : {})}
    >
      {children}
    </NavLink>
  );
};

export default CustomLink;
