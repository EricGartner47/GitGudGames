import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, Link } from 'react-router-dom';
import { signUp } from '../../store/session';
import './SignUpForm.css'

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data)
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <>
      <div id="gitgud-logo-container">
        <Link to='/' className='gitgud-logo'>
          <img src="https://i.kym-cdn.com/photos/images/newsfeed/000/690/996/f6d.png" alt="" id="gitgud-img"></img>
        </Link>
      </div>
      <div className="mainContentBox">
        <h1>Sign up for GitGud</h1>
        <form onSubmit={onSignUp}>
          <div>
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
          <div>
            <input
              type='text'
              name='username'
              onChange={updateUsername}
              value={username}
              placeholder='User Name'
            ></input>
          </div>
          <div>
            <input
              type='text'
              name='email'
              onChange={updateEmail}
              value={email}
              placeholder='Email'
            ></input>
          </div>
          <div>
            <input
              type='password'
              name='password'
              onChange={updatePassword}
              value={password}
              placeholder='Password'
            ></input>
          </div>
          <div>
            <input
              type='password'
              name='repeat_password'
              onChange={updateRepeatPassword}
              value={repeatPassword}
              required={true}
              placeholder='Confirm Password'
            ></input>
          </div>
          <button type='submit'>Sign Up</button>
        </form>
      </div>
    </>
  );
};

export default SignUpForm;
