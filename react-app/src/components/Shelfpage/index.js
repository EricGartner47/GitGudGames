import React, {useEffect, useState}from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, NavLink} from "react-router-dom";
import { Modal } from "../../context/modal";
import { loadShelves } from "../../store/shelves";
import ShelfFormNew from "../ShelfFormNew";
import ShelfFormRemove from "../ShelfFormRemove";
import ShelfFormUpdate from "../ShelfFormUpdate";
import './Shelfpage.css'

const Shelfpage = () => {
    const user = useSelector(state => state.session.user)
    const userShelves = useSelector(state => state.shelves)
    const [showCreateForm, setShowCreateForm] = useState(false);
    const [showUpdateForm, setShowUpdateForm] = useState(false);
    const [showRemoveForm, setShowRemoveForm] = useState(false);

    const shelves = Object.values(userShelves)
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
                        {shelves.map(shelf => {
                            return (
                                <ul>
                                    <li key={shelf.id}>{shelf.title}
                                    <i class="fas fa-edit" onClick={()=> setShowUpdateForm(shelf.id)}>
                                        {showUpdateForm === shelf.id && (
                                            <Modal onClose={()=> setShowUpdateForm(false)}>
                                                <ShelfFormUpdate shelf={shelf} hideForm={()=> setShowUpdateForm(false)}/>
                                            </Modal>
                                        )}
                                    </i>
                                    <i class="fas fa-trash" onClick={()=>setShowRemoveForm(shelf.id)}>
                                        {showRemoveForm === shelf.id && (
                                            <Modal onClose={()=> setShowRemoveForm(false)}>
                                                <ShelfFormRemove shelf={shelf} hideForm={()=> setShowRemoveForm(false)}/>
                                            </Modal>
                                        )}
                                    </i>
                                    </li>
                                </ul>
                            )
                        })}
                        <div id="create-shelf-container">
                            <h5>Create Shelf</h5>
                            <i class="fas fa-plus-square" onClick={()=> setShowCreateForm(true)}>
                                {showCreateForm && (
                                    <Modal onClose={()=> setShowCreateForm(false)}>
                                        <ShelfFormNew hideForm={()=> setShowCreateForm(false)}/>
                                    </Modal>
                                )}
                            </i>
                        </div>
                    </div>
            </div>
        )
    } else return (
        <Redirect to="/login" />
    )
}


export default Shelfpage;
