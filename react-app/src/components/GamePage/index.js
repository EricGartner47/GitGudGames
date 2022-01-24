import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, NavLink,  } from 'react-router-dom';
import { loadGames } from '../../store/games';
import GameFormNew from '../GameFormNew';
import GameFormRemove from '../GameFormRemove';

import './GamePage.css'

const GamePage = () => {
    const user = useSelector(state => state.session.user)
    const userGames = useSelector(state => state.games)
    const games = Object.values(userGames)
    const dispatch = useDispatch()


    useEffect(()=> {
        dispatch(loadGames(user))
    }, [dispatch, user])

    if(user){
        return (
            <div>
                <div id="shelfpage-nav-bar">
                    <NavLink to="/app" exact={true} activeClassName='active' className='gitgud-logo'>
                            <img src="https://i.kym-cdn.com/photos/images/newsfeed/000/690/996/f6d.png" alt="" id="gitgud-img"></img>
                    </NavLink>
                </div>
                {games.map(game => {
                    return (
                        <ul>
                            <li key={game.id}>{game.title}</li>
                            <div>
                                <GameFormRemove game={game}/>
                            </div>
                        </ul>
                    )
                })}
                <GameFormNew />
            </div>
        )
    } else return (
        <Redirect to="/login" />
    )
}

export default GamePage;
