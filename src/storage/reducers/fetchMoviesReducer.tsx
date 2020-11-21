import { ISetDiscoveredMoviesState, SetDiscoveredMoviesTypes } from "../types/actionFetchMoviesTypes";

const INITIAL_STATE: ISetDiscoveredMoviesState = {
    movies: [],
    error: '',
    researching: false,
}

const fetchMovieReducer = (state = INITIAL_STATE, action: SetDiscoveredMoviesTypes): ISetDiscoveredMoviesState => {
    switch (action.type) {
    case "SET_RESEARCHING":
        return { ...INITIAL_STATE, researching: true }
    case "CLEAR_DISCOVERED_MOVIES":
        return { ...INITIAL_STATE }
    case "SET_DISCOVERED_MOVIES":
        return { movies: action.movies, error: '', researching: false }
    case "ERROR_FETCH_MOVIES":
        return { movies: state.movies, error: action.error, researching: false }
    default:
        return state;
    }
}

export default fetchMovieReducer;