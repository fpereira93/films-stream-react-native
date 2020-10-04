import { SetDiscoveredMoviesState, SetDiscoveredMoviesTypes } from "../types/actionFetchMoviesTypes";

const INITIAL_STATE: SetDiscoveredMoviesState = {
    movies: [],
    error: '',
}

const fetchMovieReducer = (state = INITIAL_STATE, action: SetDiscoveredMoviesTypes): SetDiscoveredMoviesState => {
    switch (action.type) {
    case "SET_DISCOVERED_MOVIES":
        return { movies: action.movies, error: '' }
    case "ERROR_FETCH_MOVIES":
        return { movies: state.movies, error: action.error }
    default:
        return state;
    }
}

export default fetchMovieReducer;