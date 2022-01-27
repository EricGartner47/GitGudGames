import React from 'react';
import { NavLink } from 'react-router-dom';
import DemoLogin from '../DemoLogin';
import './NavBar.css'

const NavBar = () => {
  return (
    <nav id="splashpage-nav">
      <div id='splashpage-logo'>
        <NavLink to="/" exact={true} activeClassName='active' className='gitgud-logo'>
          <img src="https://i.kym-cdn.com/photos/images/newsfeed/000/690/996/f6d.png" alt="" id="gitgud-img"></img>
        </NavLink>
      </div>
      <div id="new-account-box">
        <h2 id='nav-bar-header'>Discover & game more</h2>
        <div id="sign-up-container">
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign up
          </NavLink>
        </div>
        <div id="log-in-container">
          <NavLink to='/login' exact={true} activeClassName='active'>
            Sign In
          </NavLink>
        </div>
        <div id='demo-log-in-container'>
          <DemoLogin />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
