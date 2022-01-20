import React from "react";
import { useSelector } from "react-redux";
import { Redirect, NavLink} from "react-router-dom";
import Userbar from "../Userbar";
import './Shelfpage.css'

const Shelfpage = () => {
    const user = useSelector(state => state.session.user)

    if(user) {
        return (
            <div>
                <NavLink to="/app" exact={true} activeClassName='active' className='gitgud-logo'>
                        <img src="https://i.kym-cdn.com/photos/images/newsfeed/000/690/996/f6d.png" alt="" id="gitgud-img"></img>
                </NavLink>

                <Userbar />

            </div>
        )
    } else return (
        <Redirect to="/" />
    )
}

export default Shelfpage;
