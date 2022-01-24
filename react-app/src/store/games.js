const LOAD_GAMES = 'games/LOAD_GAMES'
const NEW_GAME = 'games/NEW_GAME'
const REMOVE_GAME = 'games/REMOVE_GAME'

const getGame = (user, games) => {
    return {
        type: LOAD_GAMES,
        user,
        games
    }
}

const addGame = (game) => {
    return {
        type: NEW_GAME,
        game
    }
}

const removeGame = (game) => {
    return {
        type: REMOVE_GAME,
        game
    }
}

export const loadGamesForShelf = user => async dispatch => {
    const res = await fetch(`/api/shelves/${user.id}/games`)
    const data = await res.json();
    dispatch(getGame(user, data))
    return data;
}

export const loadGames = user => async dispatch => {
    const res = await fetch(`/api/games/${user.id}`)
    const data = await res.json();
    dispatch(getGame(user, data))
    return data;
}

export const createGame = payload => async dispatch => {
    const res = await fetch(`/api/games/${payload.user_id}`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    })
    const data = await res.json();
    dispatch(addGame(data));
    return data;
}

export const deleteGame = payload => async dispatch => {
    const res = await fetch(`/api/games/${payload.id}`, {
        method: 'DELETE'
    })
    if (res.ok){
        const data = await res.json();
        dispatch(removeGame(payload));
        return data;
    }
}

export const updateGame = payload => async dispatch => {
    const res = await fetch(`/api/games/${payload.id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    });
    const data = await res.json()
    if(res.ok){
        dispatch(addGame(data))
        return data
    }
}

const initialState = {}

export const gameReducer = (state = initialState, action) => {
    const newState = {...state}
    switch(action.type) {
        case LOAD_GAMES:
            const games = {}
            const allGames = action.games.games
            allGames.forEach(game => {
                games[game.id] = game
            })
            return {...state, ...games}
        case NEW_GAME:
            newState[action.game.id] = action.game
            return newState;
        case REMOVE_GAME:
            delete newState[action.game.id]
            return newState;
        default:
            return state
    }
}
