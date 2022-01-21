const LOAD_SHELVES = 'shelf/LOAD_SHELVES'
const NEW_SHELF = 'shelf/NEW_SHELF'
const REMOVE_SHELF ='shelf/REMOVE_SHELF'


const getShelf = (user, shelves) => {
    return {
        type: LOAD_SHELVES,
        user,
        shelves
    }
}

const addShelf = (shelf) => {
    return {
        type: NEW_SHELF,
        shelf
    }
}

const removeShelf = (shelf) => {
    return {
        type: REMOVE_SHELF,
        shelf
    }
}

export const loadShelves = user => async dispatch => {
    const res = await fetch(`/api/shelves/${user.id}/`)
    const data = await res.json();
    dispatch(getShelf(user, data))
    return data;
}

export const createShelf = payload => async dispatch => {
    const res = await fetch(`/api/shelves/${payload.user_id}/`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    })
    const data = await res.json();
    dispatch(addShelf(data));
    return data;
}

export const deleteShelf = payload => async dispatch => {
    const res = await fetch(`/api/shelves/${payload.id}/`,{
        method: 'DELETE'
    })
    if(res.ok) {
        const data = await res.json();
        dispatch(removeShelf(payload))
        return data
    }
}

const initialState = {}

export const shelfReducer = (state = initialState, action) => {
    const newState =  {...state}
    switch(action.type) {
        case LOAD_SHELVES:
            const shelves = {}
            const allShelves = action.shelves.shelves
            allShelves.forEach(shelf => {
                shelves[shelf.id] = shelf
            })
            return {...state, ...shelves}
        case NEW_SHELF:
            newState[action.shelf.id] = action.shelf
            return newState;
        case REMOVE_SHELF:
            delete newState[action.shelf.id]
            return newState;
        default:
            return state;
    }
}
