import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, NavLink, Link } from 'react-router-dom';
import { loadGamesProgressBar } from '../../store/games';
import Userbar from '../Userbar';
import './Homepage.css'

const Homepage = () => {
    const user = useSelector(state => state.session.user);
    const userGames = useSelector(state => state.games);
    const games = Object.values(userGames)
    const dispatch = useDispatch()

    // useEffect(()=> {
    //     dispatch(loadGamesProgressBar(user))
    // }, [dispatch, user])

    if (user) {
        return (
            <main>
                <div id="homepage-nav-bar">
                    <div id="homepage-logo">
                        <NavLink to="/app" exact={true} activeClassName='active' className='gitgud-logo'>
                            <img src="https://i.kym-cdn.com/photos/images/newsfeed/000/690/996/f6d.png" alt="" id="gitgud-img"></img>
                        </NavLink>
                    </div>
                    <div id='my-shelves-link'>
                        <Link to="/app/shelves">My Shelves</Link>
                    </div>
                    <div id='my=games-link'>
                        <Link to="/app/games">My Games</Link>
                    </div>
                    <div>
                        <Userbar />
                    </div>
                </div>
                <section id="progress-tracker">
                    <div id='currently-playing-container'>
                        <h3>Currently Playing</h3>
                            <div id='progress-games-list'>
                                <ul>
                                    <li>
                                        Persona 4
                                    </li>
                                    <li>
                                        Dead Space
                                    </li>
                                    <li>
                                        Civilization VI
                                    </li>
                                </ul>
                                {/* {games.map(game => {
                                    return (
                                        <ul id='progress-games-list'>
                                            <li key={game.id}> {game.title}

                                            </li>
                                        </ul>
                                    )
                                })} */}
                            </div>
                    </div>
                    <div id='suggested-games-container'>
                        <h3>Suggested Games</h3>
                        <ul>
                            <li>
                                Inscryption
                            </li>
                            <li>
                                Hollow Knight
                            </li>
                            <li>
                                Dead Cells
                            </li>
                            <li>
                                Hades
                            </li>
                        </ul>
                    </div>
                </section>
            </main>
        )
    }
    else return (
        <Redirect to="/" />
    )
}

export default Homepage;
