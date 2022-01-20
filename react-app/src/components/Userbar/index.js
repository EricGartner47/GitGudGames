import React from 'react';
import { useSelector } from 'react-redux';
import LogoutButton from '../auth/LogoutButton';
import './Userbar.css'

const Userbar = () => {
    const user = useSelector(state => state.session.user)

    return (
        <nav id="userbar">
            <div id='userProfile'>
                <span>{user.username}</span>
                <span>{user.email}</span>
            </div>
            <LogoutButton />
        </nav>

    )
}

export default Userbar;
