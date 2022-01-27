import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, NavLink,  } from 'react-router-dom';
import { Modal } from '../../context/modal';
import { loadGames } from '../../store/games';
import { loadShelves } from '../../store/shelves';
import GameFormNew from '../GameFormNew';
import GameFormRemove from '../GameFormRemove';
import GameFormUpdate from '../GameFormUpdate';
import './GamePage.css'

const GamePage = () => {
    const user = useSelector(state => state.session.user)
    const userGames = useSelector(state => state.games)
    const userShelves = useSelector(state => state.shelves)
    const [showCreateForm, setShowCreateForm] = useState(false);
    const [showUpdateForm, setShowUpdateForm] = useState(false);
    const [showRemoveForm, setShowRemoveForm] = useState(false);
    const games = Object.values(userGames)
    const shelves = Object.values(userShelves)
    const dispatch = useDispatch()


    useEffect(()=> {
        dispatch(loadGames(user))
        dispatch(loadShelves(user))
    }, [dispatch, user])

    if(user){
        return (
            <div id='GamePage-nav-bar'>
                <div>
                    <NavLink to="/app" exact={true} activeClassName='active' className='gitgud-logo'>
                            <img src="https://i.kym-cdn.com/photos/images/newsfeed/000/690/996/f6d.png" alt="" id="gitgud-img"></img>
                    </NavLink>
                </div>
                <div id="fullGamePage-container">
                    <div id="gamePage-container">
                        <h4>My Games: </h4>
                        {games.map(game => {
                            return (
                                <>
                                    <table>
                                        <thead key={Math.random()}>
                                            <tr key={Math.random()}>
                                                <th>Title</th>
                                                <th>Notes</th>
                                                <th>Rating</th>
                                                <th>Completed</th>
                                                <th>Genre</th>
                                            </tr>
                                        </thead>
                                        <tbody key={Math.random()}>
                                            <tr key={Math.random()}>
                                                <td>{game.title}</td>
                                                <td>{game.notes}</td>
                                                <td>{game.rating || 'N/A'}</td>
                                                <td>{game.completed? 'Finished' : "N/A"}</td>
                                                <td>{game.genre}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                            <div id='game-edit-delete-container'>
                                                <div id='game-edit-container'>
                                                    <i className="fas fa-trash" onClick={()=> setShowRemoveForm(game.id)}></i>
                                                        {showRemoveForm === game.id && (
                                                            <Modal onClose={()=> setShowRemoveForm(false)}>
                                                                <GameFormRemove game={game} hideForm={()=> setShowRemoveForm(false)} />
                                                            </Modal>
                                                        )}
                                                </div>
                                                <div id='game-delete-container'>
                                                    <i className="fas fa-edit" onClick={()=> setShowUpdateForm(game.id)}></i>
                                                        {showUpdateForm === game.id && (
                                                            <Modal onClose={()=> setShowUpdateForm(false)}>
                                                                <GameFormUpdate game={game} hideForm={()=> setShowUpdateForm(false)} shelves={shelves}/>
                                                            </Modal>
                                                        )}
                                                </div>
                                            </div>
                                </>
                            )
                        })}
                    </div>
                    <div id="create-game-container">
                        <h5>Create Game</h5>
                        <i className="fas fa-plus-square" onClick={()=> setShowCreateForm(true)}></i>
                            {showCreateForm && (
                                <Modal onClose={()=> setShowCreateForm(false)}>
                                    <GameFormNew hideForm={()=> setShowCreateForm(false)} shelves={shelves}/>
                                </Modal>
                            )}
                    </div>
                </div>
            </div>
        )
    } else return (
        <Redirect to="/login" />
    )
}

export default GamePage;
