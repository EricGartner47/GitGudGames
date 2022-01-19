import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import './SplashPage.css'

const SplashPage = () => {
    const user = useSelector(state => state.session.user)

    if(user) {
        return (
            <Redirect to="/app" />
        )
    }

    else return (
        <>
            <div>
                <h2>Need to track your gaming progress?</h2>
                <p>You're in the right place. Enter your gaming details, and we'll track your progress for you. </p>
            </div>
            <footer id="splashpage-footer">
            <div className='footer-nav-div'>
                <ul className="nav-footer-list">
                    <li className='nav-footer-header'>
                        Eric Gartner
                    </li>
                    <li>
                        <a className="gitHub-link footer-link" href="https://github.com/EricGartner47">Github</a>
                    </li>
                    <li>
                        <a className="linkedIn-link footer-link"href="https://www.linkedin.com/in/eric-gartner-731907a0/">LinkedIn</a>
                    </li>
                </ul>
            </div>
            </footer>
        </>
    )
}

//test

export default SplashPage;
