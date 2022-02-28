import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, NavLink,  } from 'react-router-dom';
import { Modal } from '../../context/modal';
import { loadGames } from '../../store/games';
import { loadShelves } from '../../store/shelves';
import GameFormNew from '../GameFormNew';
import GameFormRemove from '../GameFormRemove';
import GameFormUpdate from '../GameFormUpdate';
import Search from '../SearchBar';
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
    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');
    const dispatch = useDispatch()


    useEffect(()=> {
        dispatch(loadGames(user))
        dispatch(loadShelves(user))
    }, [dispatch, user])

    const filterGames = (games, query) => {
        if (!query) {
            return games;
        }

        return games.filter((game) => {
            const gameName = game.title.toLowerCase();
            return gameName.includes(query)
        })
    }
    const filteredGames = filterGames(games, searchQuery);

    if(user){
        return (
            <div id='GamePage-nav-bar'>
                <div>
                    <NavLink to="/app" exact={true} activeClassName='active' className='gitgud-logo'>
                            <img src="https://i.kym-cdn.com/photos/images/newsfeed/000/690/996/f6d.png" alt="" id="gitgud-img"></img>
                    </NavLink>
                </div>
                <div>
                    <Search
                            searchQuery={searchQuery}
                            setSearchQuery={setSearchQuery}
                    />
                </div>
                <div id="fullGamePage-container">
                    <div id="gamePage-container">
                        <div>
                            <h4>My Games: </h4>
                        </div>
                        <table>
                            <thead>
                                <tr key={user.id}>
                                    <th>Title</th>
                                    <th>Progress</th>
                                    <th>Rating</th>
                                    <th>Completed</th>
                                    <th>Genre</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                        {filteredGames? filteredGames.map(game => {
                            return (
                                <>
                                    <tbody>
                                        <tr key={game.id}>
                                            <td>{game.title}</td>
                                            <td>{game.notes}</td>
                                            <td>{game.rating || 'N/A'}</td>
                                            <td>{game.completed? 'Finished' : "N/A"}</td>
                                            <td>{game.genre}</td>
                                            <td>
                                                <i className="fas fa-edit" onClick={()=> setShowUpdateForm(game.id)}></i>
                                                {showUpdateForm === game.id && (
                                                    <Modal onClose={()=> setShowUpdateForm(false)}>
                                                        <GameFormUpdate game={game} hideForm={()=> setShowUpdateForm(false)} shelves={shelves}/>
                                                    </Modal>
                                                )}
                                            </td>
                                            <td>
                                                <i className="fas fa-trash" onClick={()=> setShowRemoveForm(game.id)}></i>
                                                {showRemoveForm === game.id && (
                                                    <Modal onClose={()=> setShowRemoveForm(false)}>
                                                        <GameFormRemove game={game} hideForm={()=> setShowRemoveForm(false)} />
                                                    </Modal>
                                                )}
                                            </td>
                                        </tr>
                                    </tbody>
                                </>
                            )
                            }) : games.map(game => {
                                return (
                                    <>
                                        <tbody>
                                            <tr key={game.id}>
                                                <td>{game.title}</td>
                                                <td>{game.notes}</td>
                                                <td>{game.rating || 'N/A'}</td>
                                                <td>{game.completed? 'Finished' : "N/A"}</td>
                                                <td>{game.genre}</td>
                                                <td>
                                                    <i className="fas fa-edit" onClick={()=> setShowUpdateForm(game.id)}></i>
                                                    {showUpdateForm === game.id && (
                                                        <Modal onClose={()=> setShowUpdateForm(false)}>
                                                            <GameFormUpdate game={game} hideForm={()=> setShowUpdateForm(false)} shelves={shelves}/>
                                                        </Modal>
                                                    )}
                                                </td>
                                                <td>
                                                    <i className="fas fa-trash" onClick={()=> setShowRemoveForm(game.id)}></i>
                                                    {showRemoveForm === game.id && (
                                                        <Modal onClose={()=> setShowRemoveForm(false)}>
                                                            <GameFormRemove game={game} hideForm={()=> setShowRemoveForm(false)} />
                                                        </Modal>
                                                    )}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </>
                                )
                            }
                            )}
                        </table>
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

//test
