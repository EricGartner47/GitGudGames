
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import './NavBar.css'

const NavBar = () => {
  return (
    <nav id="homepage-nav">
      <div id='homepage-logo'>
        <NavLink to="/" exact={true} activeClassName='active' className='gitgud-logo'>
          <img src="https://i.kym-cdn.com/photos/images/newsfeed/000/690/996/f6d.png" alt="" id="gitgud-img"></img>
        </NavLink>
      </div>
      <div id="new-account-box">
        <h2>Discover & game more</h2>
        <div id="sign-up-container">
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign up with email
          </NavLink>
        </div>
        <div id="log-in-container">
          <div>
            Already a member?
          </div>
          <NavLink to='/login' exact={true} activeClassName='active'>
            Sign In
          </NavLink>
        </div>
      </div>
      {/* <ul>
        <li>
        </li>
        <li>

        </li>
        {/* <li>
          <NavLink to='/users' exact={true} activeClassName='active'>
            Users
          </NavLink>
        </li> */}
        {/* <li>
          <LogoutButton />
        </li>
      </ul} */}
    </nav>
  );
}

export default NavBar;
