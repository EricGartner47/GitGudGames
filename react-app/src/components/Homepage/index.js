import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import { Redirect, NavLink, Link } from 'react-router-dom';
import Userbar from '../Userbar';
import './Homepage.css'

const Homepage = () => {
    const user = useSelector(state => state.session.user);

    if (user) {
        return (
            <main>
                <div id="homepage-nav-bar">
                    <div>
                        <NavLink to="/app" exact={true} activeClassName='active' className='gitgud-logo'>
                            <img src="https://i.kym-cdn.com/photos/images/newsfeed/000/690/996/f6d.png" alt="" id="gitgud-img"></img>
                        </NavLink>
                    </div>
                    <div>
                        <Link to="/app/shelves">My Shelves</Link>
                    </div>
                    <div>
                        <Userbar />
                    </div>
                </div>
                <div id="progress-tracker">
                    <h3>Currently Playing</h3>
                </div>
                <div id="suggested-games">
                    <h3>Suggested Games</h3>
                </div>

            </main>
        )
    }
    else return (
        <Redirect to="/" />
    )
}

export default Homepage;
