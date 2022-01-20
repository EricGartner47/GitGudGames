import React, {useState} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { Redirect } from 'react-router-dom';
import './ShelfFormNew.css'

const ShelfFormNew = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user)
    const [title, setTitle] = useState('')
    const [errorrs, setErrors] = useState([])

    if(!user) {
        return (
            <Redirect to='/' />
        )
    }

    return (
        <>
            


        </>
    )
}

export default ShelfFormNew
