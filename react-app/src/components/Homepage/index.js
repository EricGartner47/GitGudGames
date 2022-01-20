import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Userbar from '../Userbar';
import './Homepage.css'

const Homepage = () => {
    const user = useSelector(state => state.session.user);

    if (user) {
        return (
            <main>
                <Userbar />
                <div id="progress-tracker">
                    <h3>Currently Playing</h3>
                </div>
                <div id="suggested-games">
                    <h3>Suggested Games</h3>
                </div>

            </main>
        )
    }
    else return (
        <Redirect to="/login" />
    )
}

export default Homepage;
