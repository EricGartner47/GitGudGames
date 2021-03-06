import React, {useEffect, useState}from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, NavLink} from "react-router-dom";
import { Modal } from "../../context/modal";
import { loadShelves } from "../../store/shelves";
import { loadGamesbyShelfId } from "../../store/games";
import ShelfFormNew from "../ShelfFormNew";
import ShelfFormRemove from "../ShelfFormRemove";
import ShelfFormUpdate from "../ShelfFormUpdate";
import './Shelfpage.css'

const Shelfpage = () => {
    const user = useSelector(state => state.session.user)
    const userShelves = useSelector(state => state.shelves)
    const userGames = useSelector(state => state.games)
    const [CreateFormModal, setCreateFormModal] = useState(false);
    const [UpdateFormModal, setUpdateFormModal] = useState(false);
    const [RemoveFormModal, setRemoveFormModal] = useState(false);
    const shelves = Object.values(userShelves)
    const games = Object.values(userGames)
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(loadShelves(user))
    }, [dispatch, user])

    if(user) {
        return (
            <div>
                <div id="shelfpage-nav-bar">
                    <NavLink to="/app" exact={true} activeClassName='active' className='gitgud-logo'>
                            <img src="https://i.kym-cdn.com/photos/images/newsfeed/000/690/996/f6d.png" alt="" id="gitgud-img"></img>
                    </NavLink>
                </div>
                    <div id="shelfPage-container">
                        <h4>My Shelves: </h4>
                        <div id='Shelf-container'>
                            {shelves.map(shelf => {
                                return (
                                    <>
                                        <ul>
                                            <li key={shelf.id} onClick={()=> dispatch(loadGamesbyShelfId(shelf))} id="list-of-shelves">{shelf.title}
                                            <i className="fas fa-edit" onClick={()=> setUpdateFormModal(shelf.id)}></i>
                                                {UpdateFormModal === shelf.id && (
                                                    <Modal onClose={()=> setUpdateFormModal(false)}>
                                                        <ShelfFormUpdate shelf={shelf} hideForm={()=> setUpdateFormModal(false)}/>
                                                    </Modal>
                                                )}
                                            <i className="fas fa-trash" onClick={()=> setRemoveFormModal(shelf.id)}></i>
                                                {RemoveFormModal === shelf.id && (
                                                    <Modal onClose={()=> setRemoveFormModal(false)}>
                                                        <ShelfFormRemove shelf={shelf} hideForm={()=> setRemoveFormModal(false)}/>
                                                    </Modal>
                                                )}
                                            </li>
                                        </ul>
                                    </>
                                )
                            })}
                        </div>
                        <div id='gameShelf-container'>
                            <h4>My Games: </h4>
                            <table id='table-container'>
                                <thead>
                                    <tr id='table-header'>
                                        <th>Title</th>
                                        <th>Rating</th>
                                        <th>Genre</th>
                                    </tr>
                                </thead>
                            {games.map(game => {
                                return (
                                    <tbody>
                                        <tr key={game.id}>
                                            <td>{game.title}</td>
                                            <td>{game.rating || 'N/A'}</td>
                                            <td>{game.genre}</td>
                                        </tr>
                                    </tbody>
                                )
                            })}
                            </table>
                        </div>
                    </div>
                        <div id="create-shelf-container">
                            <h5>Create Shelf</h5>
                            <i className="fas fa-plus-square" onClick={()=> setCreateFormModal(true)}></i>
                                {CreateFormModal && (
                                    <Modal onClose={()=> setCreateFormModal(false)}>
                                        <ShelfFormNew hideForm={()=> setCreateFormModal(false)}/>
                                    </Modal>
                                )}
                        </div>
            </div>
        )
    } else return (
        <Redirect to="/login" />
    )
}


export default Shelfpage;
