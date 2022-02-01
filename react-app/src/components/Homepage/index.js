import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, NavLink, Link } from 'react-router-dom';
import { loadGames } from '../../store/games';
import Userbar from '../Userbar';
import './Homepage.css'

const Homepage = () => {
    const user = useSelector(state => state.session.user);
    const userGames = useSelector(state => state.games);
    const games = Object.values(userGames)
    const dispatch = useDispatch()

    if(!user){
        <Redirect to="/" />
    }
    useEffect(()=> {
        dispatch(loadGames(user))
    },[])

    const currentGames = games.filter(game => game.shelf_id === 2)

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
                    <div id='my-games-link'>
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
                            <table>
                                <thead>
                                    <tr>
                                        <th>
                                            Title
                                        </th>
                                        <th>
                                            Genre
                                        </th>
                                        <th>
                                            Progress
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentGames.map(game => {
                                        return (
                                            <tr key={game.id}>
                                                <td>{game.title}</td>
                                                <td>{game.genre}</td>
                                                <td>{game.notes}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div id='suggested-games-container'>
                        <h3>Suggested Games</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>
                                        Title
                                    </th>
                                    <th>
                                        Genre
                                    </th>
                                    <th>
                                        Average Rating
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        Sekiro: Shadows Die Twice
                                    </td>
                                    <td>
                                        Adventure
                                    </td>
                                    <td>
                                        4.5
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Inscryption
                                    </td>
                                    <td>
                                        Puzzler
                                    </td>
                                    <td>
                                        4.8
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        METAL GEAR SOLID V: PHANTOM PAIN
                                    </td>
                                    <td>
                                        Sandbox
                                    </td>
                                    <td>
                                        5
                                    </td>
                                </tr>
                            </tbody>
                        </table>
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
