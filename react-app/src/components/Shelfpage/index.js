import React, {useEffect, useState}from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, NavLink} from "react-router-dom";
import { loadShelves } from "../../store/shelves";
import Userbar from "../Userbar";
import './Shelfpage.css'

const Shelfpage = () => {
    const user = useSelector(state => state.session.user)
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
                    <Userbar />
                </div>
            </div>
        )
    } else return (
        <Redirect to="/" />
    )
}

export default Shelfpage;
