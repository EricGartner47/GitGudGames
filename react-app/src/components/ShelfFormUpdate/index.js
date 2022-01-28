import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateShelf } from '../../store/shelves';
import './ShelfFormUpdate.css'

const ShelfFormUpdate = ({shelf, hideForm}) => {
    const user = useSelector(state => state.session.user)
    const [title, setTitle] = useState(shelf.title);
    const [errors, setErrors] = useState([]);
    const dispatch = useDispatch();

    const onSubmit = async e => {
        e.preventDefault()
        if(errors.length > 0) return
        else {
            const payload ={
                id: shelf.id,
                title,
                user_id: user.id
            }
            await dispatch(updateShelf(payload))
                .then(async res=> {
                    if (res.errors) setErrors(res.errors)
                })
            hideForm()
            return dispatch(updateShelf(payload))
        }
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <h4>Rename Shelf</h4>
                <input
                    type="text"
                    value={title}
                    onChange={(e)=>{
                        setTitle(e.target.value)
                        if(e.target.value.length === 0) setErrors(['Please enter a title for the shelf'])
                        else setErrors([])
                    }}
                    required
                    placeholder={title}
                />
                {errors.length > 0 && errors.map((error, i)=> (
                    <div key={i}>
                        {error}
                    </div>
                ))}
                <i className="far fa-save" onClick={onSubmit}></i>
            </form>
        </div>
    )
}

export default ShelfFormUpdate;
