import React from 'react';
import { useSelector } from 'react-redux';
import LogoutButton from '../auth/LogoutButton';
import Search from '../SearchBar';
import './Userbar.css'

const Userbar = () => {
    const user = useSelector(state => state.session.user)

    return (
        <nav id="userbar">
            <div id='search-bar'>
                <Search
                />
            </div>
            <div id='userProfile'>
                <span>{user.username}</span>
            </div>
            <LogoutButton />
        </nav>

    )
}

export default Userbar;
