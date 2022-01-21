import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { deleteShelf } from '../../store/shelves';
import './ShelfFormRemove.css'

const ShelfFormRemove = () => {
    const user = useSelector(state => state.session.user);
    const shelf = useSelector(state => state.shelf)
    const dispatch = useDispatch();
    const [errors, setErrors] = useState([])

    if(!user) {
        return (
            <Redirect to='/' />
        )
    }

    const onSubmit = async e => {
        e.preventDefault();
        return dispatch(deleteShelf(shelf))
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <h4>Remove shelf</h4>
                <label>Do you wish to remove the shelf "{shelf.title}"?</label>
                <button type="submit">Delete Shelf</button>
            </form>
        </div>
    )
}
