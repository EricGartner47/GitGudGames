const LOAD_GAMES = 'games/LOAD_GAMES'

const getGame = (user, games) => {
    return {
        type: LOAD_GAMES,
        user,
        games
    }
}

export const loadGamesForShelf = user => async dispatch => {
    const res = await fetch(`/api/shelves/${user.id}/games`)
    const data = await res.json();
    dispatch(getGame(user, data))
    return data;
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
        default:
            return state
    }
}
