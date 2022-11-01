import React from 'react';
import "../../styles/nav.scss";
import { NavLink } from "react-router-dom";

class Nav extends React.Component {
  render() {

    return (
      <>
        <div className='topnav'>
          <NavLink activeClassName='active' to="/" exact={true}>
            Home
          </NavLink>
          <NavLink to="/todos" activeClassName='active' exact={true}>
            Todos
          </NavLink>
          <NavLink to="/about" activeClassName='active' exact={true}>
            About
          </NavLink>
          <NavLink to="/user" activeClassName='active' exact={true}>
            Users
          </NavLink>
        </div>
      </>
    )
  }
}
export default Nav;