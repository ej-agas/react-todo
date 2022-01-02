import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavigationBar() {
  let activeStyle = 'active';

  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blog"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/genshin-leaks"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Genshin Leaks
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
