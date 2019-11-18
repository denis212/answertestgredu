import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Sidenav = () => {
  return (
    <div className="sidebar-sticky">
      <ul className="nav flex-column">
        <Link className="navbar-brand" to="#">
          Hexa Institute
        </Link>
        <NavLink className="nav-item nav-link" to="/students">
          Students
        </NavLink>
        <NavLink className="nav-item nav-link" to="/programs">
          Programs
        </NavLink>
        <NavLink className="nav-item nav-link" to="/courses">
          Courses
        </NavLink>
        <NavLink className="nav-item nav-link" to="/login">
          Login
        </NavLink>
      </ul>
    </div>
  )
}

export default Sidenav;
