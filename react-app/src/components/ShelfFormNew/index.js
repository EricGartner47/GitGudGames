import React, {useState} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { Redirect } from 'react-router-dom';
import { createShelf } from '../../store/shelves';
import './ShelfFormNew.css'

const ShelfFormNew = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user)
    const [title, setTitle] = useState('')
    const [errors, setErrors] = useState([])

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
                user_id: user.id
            }

            const newShelf = await dispatch(createShelf(payload))
                .then(async res =>{
                    if (res.errors) setErrors(res.errors)
                    else return res
                })
            return newShelf
        }
    }

    return (
            <div>
                <form onSubmit={onSubmit}>
                    <h4>Add a shelf</h4>
                    <label>Please enter a new shelf name:</label>
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
                    {errors.length > 0 && errors.map((error, i) => (
                        <div key={i}>
                            {error}
                        </div>
                    ))}
                    <button type="submit">Add Shelf</button>
                </form>
            </div>
    )
}

export default ShelfFormNew
