import React from 'react';
import { useSelector } from 'react-redux';
import LogoutButton from '../auth/LogoutButton';

const Userbar = () => {
    const user = useSelector(state => state.session.user)

    return (
        <nav id="userbar">
            <div id='userProfile'>

            </div>

            <LogoutButton />
        </nav>

    )
}

export default Userbar;
