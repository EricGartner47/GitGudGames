import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar/NavBar';
import Homepage from './components/Homepage';
import SplashPage from './components/SplashPage';
import Shelfpage from './components/Shelfpage';
import GamePage from './components/GamePage';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <Route path='/app' exact={true}>
          <Homepage />
        </Route>
        <Route path='/app/shelves' exact={true}>
          <Shelfpage />
        </Route>
        <Route path='/app/games' exact={true}>
          <GamePage />
        </Route>
        <Route path='/' exact={true} >
          <NavBar />
          <SplashPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
