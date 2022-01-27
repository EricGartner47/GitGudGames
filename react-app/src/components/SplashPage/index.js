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

     return (
        <>
            <div id='banner-container'>
                <div id='intro-container'>
                    <h1>Welcome to Git Gud Games!</h1>
                    <h2>Need to track your gaming progress?</h2>
                    {/* <p>You're in the right place. Enter your gaming details, and we'll track your progress for you. </p> */}
                </div>
            </div>
            {/* <div id="mario-splashpage">
                <img alt='' src="https://toppng.com/uploads/preview/8-bit-mario-8-bit-luigi-pixel-115633511986zud7ifcqi.png" id="mario-image">
                </img>
            </div> */}
            <div id="splashpage-footer">
                <div className='footer-nav-div'>
                    <div className="nav-footer-list">
                        <div className='nav-footer-header'>
                            Eric Gartner
                        </div>
                        <div id='gitHub-container'>
                            <i className="fas fa-gamepad"></i>
                            <a className="gitHub-link footer-link" href="https://github.com/EricGartner47">Github</a>
                        </div>
                        <div id="linkedIn-container">
                            <i className="fas fa-gamepad"></i>
                            <a className="linkedIn-link footer-link"href="https://www.linkedin.com/in/eric-gartner-731907a0/">LinkedIn</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default SplashPage;
