import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateGame } from '../../store/games';
import './GameFormUpdate.css'

const GameFormUpdate =({game}) => {
    const user = useSelector(state => state.session.user)
    const [title, setTitle] = useState(game.title);
    const [errors, setErrors] = useState([])
    const dispatch = useDispatch();
    
}
