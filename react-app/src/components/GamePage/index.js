import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, NavLink,  } from 'react-router-dom';
import { Modal } from '../../context/modal';
import { loadGames } from '../../store/games';
import GameFormNew from '../GameFormNew';
import GameFormRemove from '../GameFormRemove';
import GameFormUpdate from '../GameFormUpdate';
import './GamePage.css'

const GamePage = () => {
    const user = useSelector(state => state.session.user)
    const userGames = useSelector(state => state.games)
    const [showCreateForm, setShowCreateForm] = useState(false);
    const [showUpdateForm, setShowUpdateForm] = useState(false);
    const [showRemoveForm, setShowRemoveForm] = useState(false);
    const games = Object.values(userGames)
    const dispatch = useDispatch()


    useEffect(()=> {
        dispatch(loadGames(user))
    }, [dispatch, user])

    if(user){
        return (
            <div id='shelfpage-nav-bar'>
                <div>
                    <NavLink to="/app" exact={true} activeClassName='active' className='gitgud-logo'>
                            <img src="https://i.kym-cdn.com/photos/images/newsfeed/000/690/996/f6d.png" alt="" id="gitgud-img"></img>
                    </NavLink>
                </div>
                {games.map(game => {
                    return (
                        <ul>
                            <li key={game.id}>{game.title}
                                <div>
                                    <i class="fas fa-trash" onClick={()=>setShowRemoveForm(game.id)}>
                                        {showRemoveForm === game.id && (
                                            <Modal onClose={()=> setShowRemoveForm(false)}>
                                                <GameFormRemove game={game} hideForm={()=> setShowRemoveForm(false)} />
                                            </Modal>
                                        )}
                                    </i>
                                </div>
                                <div>
                                    <i class="fas fa-edit" onClick={()=> setShowUpdateForm(game.id)}>
                                        {showUpdateForm === game.id && (
                                            <Modal onClose={()=> setShowUpdateForm(false)}>
                                                <GameFormUpdate game={game} hideForm={()=> setShowUpdateForm(false)} />
                                            </Modal>
                                        )}
                                    </i>
                                </div>
                            </li>
                        </ul>
                    )
                })}
                <i class="fas fa-plus-square" onClick={()=> setShowCreateForm(true)}>
                    {showCreateForm && (
                        <Modal onClose={()=> setShowCreateForm(false)}>
                            <GameFormNew hideForm={()=> setShowCreateForm(false)}/>
                        </Modal>
                    )}
                </i>
            </div>
        )
    } else return (
        <Redirect to="/login" />
    )
}

export default GamePage;
