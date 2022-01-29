import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateGame } from '../../store/games';
import './GameFormUpdate.css'

const GameFormUpdate =({game, hideForm, shelves}) => {
    const user = useSelector(state => state.session.user)
    const [title, setTitle] = useState(game.title);
    const [notes, setNotes] = useState(game.notes);
    const [rating, setRating] = useState(game.rating);
    const [completed, setCompleted] = useState(game.completed || false);
    const [genre, setGenre] = useState(game.genre)
    const [shelf_id, setShelf_id] = useState(game.shelf_id || 'select')
    const [errors, setErrors] = useState([])
    const dispatch = useDispatch();

    const onSubmit =async e => {
        e.preventDefault()
        if(errors.length > 0) return
        else {
            const payload = {
                id: game.id,
                title,
                user_id: user.id,
                notes,
                rating,
                completed,
                genre,
                shelf_id
            }
            await dispatch(updateGame(payload))
                .then(async res=> {
                    if (res.errors) setErrors(res.errors)
                })
            hideForm()
            return dispatch(updateGame(payload))
        }
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <h4>Update Game</h4>
                <input
                        type="text"
                        value={title}
                        onChange={(e)=> {
                            setTitle(e.target.value)
                            if (e.target.value.length === 0) setErrors(['No title entered. Please enter a title.'])
                            else setErrors([])
                        }}
                        required
                    />
                    <input
                        type="text"
                        value={notes}
                        onChange={(e)=> {setNotes(e.target.value)}}
                    />
                    <input
                        type="number"
                        min='1'
                        max='5'
                        value={rating}
                        onChange={(e)=> {setRating(e.target.value)}}
                        required
                    />
                    <input
                        type="checkbox"
                        checked={completed}
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
                    <select
                        value={shelf_id || 'select' }
                        onChange={(e)=> {setShelf_id(e.target.value)}}
                        >
                        {shelves.map(shelf => {
                            return <option key={shelf.id} value={shelf.id}>{shelf.title}</option>
                        })}
                    </select>
                {errors.length > 0 && errors.map((error, i)=> (
                    <div key={i}>
                        {error}
                    </div>
                ))}
                <button type="submit">Update Game</button>
            </form>
        </div>
    )
}

export default GameFormUpdate;
