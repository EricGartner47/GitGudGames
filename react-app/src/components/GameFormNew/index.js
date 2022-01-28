import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { createGame } from '../../store/games';
import { loadShelves } from '../../store/shelves';
import './GameFormNew.css'

const GameFormNew = ({hideForm, shelves}) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    const [title, setTitle] = useState('');
    const [notes, setNotes] = useState('');
    const [rating, setRating] = useState('');
    const [completed, setCompleted] = useState(false);
    const [genre, setGenre] = useState('')
    const [shelf_id, setShelf_id] = useState('')
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
                genre,
                shelf_id
            }
            const newGame = await dispatch(createGame(payload))
                .then(async res =>{
                    if (res.errors) setErrors(res.errors)
                    else return res
                })
            hideForm()
            return newGame
        }
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                    <h4>Add a Game</h4>
                    <input
                        type="text"
                        value={title}
                        onChange={(e)=> {
                            setTitle(e.target.value)
                            if (e.target.value.length === 0) setErrors(['No title entered. Please enter a title.'])
                            else setErrors([])
                        }}
                        required
                        placeholder='Enter title'
                    />
                    <input
                        type="text"
                        value={notes}
                        onChange={(e)=> {setNotes(e.target.value)}}
                        placeholder='Enter Progress'
                    />
                    <input
                        type="number"
                        min='1'
                        max='5'
                        value={rating}
                        onChange={(e)=> {setRating(e.target.value)}}
                    />
                    <input
                        type="checkbox"
                        value={completed}
                        onChange={(e)=> {setCompleted(!completed)}}
                    />
                    <select onChange={(e)=> {setGenre(e.target.value)}}>
                        <option value="Shooter">Shooter</option>
                        <option value="RPG">RPG</option>
                        <option value="Adventure">Adventure</option>
                        <option value="Horror">Horror</option>
                        <option value="Platformer">Platformer</option>
                        <option value="Sandbox">Sandbox</option>
                        <option value="Puzzler">Puzzler</option>
                        <option value="Strategy">Strategy</option>
                    </select>
                    <select onChange={(e)=> {setShelf_id(e.target.value)}}>
                        {shelves.map(shelf => {
                            return <option key={shelf.id} value={shelf.id}>{shelf.title}</option>
                        })}
                    </select>
                    {errors.length > 0 && errors.map((error, i) => (
                        <div key={i}>
                            {error}
                        </div>
                    ))}
                    <button type="submit">Add Game</button>
            </form>
        </div>
    )
}

export default GameFormNew;
