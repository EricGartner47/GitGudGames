import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { createGame } from '../../store/games';
import './GameFormNew.css'

const GameFormNew = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    const [title, setTitle] = useState('');
    const [notes, setNotes] = useState('');
    const [rating, setRating] = useState('');
    const [completed, setCompleted] = useState('');
    const [genre, setGenre] = useState('')
    const [errors, setErrors] = useState([]);

    if(!user) {
        return (
            <Redirect to='/' />
        )
    }

    const onSubmit = async e => {
        e.preventDefault()
        if(errors.length > 0) return;
        else {
            const payload = {
                title,
                user_id: user.id,
                notes,
                rating,
                completed,
                genre
            }
            const newGame = await dispatch(createGame(payload))
                .then(async res =>{
                    if (res.errors) setErrors(res.errors)
                    else return res
                })
            return newGame
        }
    }

    return (
        <div>
            
        </div>
    )
}

export default GameFormNew;
