import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { deleteShelf } from '../../store/shelves';
import './ShelfFormRemove.css'

const ShelfFormRemove = ({shelf, hideForm}) => {
    const user = useSelector(state => state.session.user);
    const userShelves = useSelector(state => state.shelf)
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
        return dispatch(deleteShelf(shelf))
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <h4>Remove shelf</h4>
                <label>Do you wish to delete "{shelf.title}"?</label>
                <button type="submit">Delete Shelf</button>
            </form>
        </div>
    )
}

export default ShelfFormRemove;
