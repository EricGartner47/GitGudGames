const LOAD_SHELVES = 'shelf/LOAD_SHELVES'

const getShelf = (user, shelves) => {
    return {
        type: LOAD_SHELVES,
        user,
        shelves
    }
}

export const loadShelves = user => async dispatch => {
    const res = await fetch(`/api/shelves/${user.id}`)
    const data = await res.json();
    dispatch(getShelf(user, data))
    return data;
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
        default:
            return state;
    }
}
