import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { deleteGame } from '../../store/games';
import './GameFormRemove.css'

const GameFormRemove =({game, hideForm}) => {
    const user = useSelector(state => state.session.user)
    const dispatch = useDispatch();
    const [errors, setErrors] = useState([])

    if(!user) {
        return (
            <Redirect to='/' />
        )
    }

    const onSubmit = async e => {
        e.preventDefault();
        hideForm()
        return dispatch(deleteGame(game))
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <h4>Remove Game</h4>
                <label>Do you wish to remove the game "{game.title}"?</label>
                <button type="submit">Delete Game</button>
            </form>
        </div>
    )
}

export default GameFormRemove;
