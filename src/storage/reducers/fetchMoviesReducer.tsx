import { ISetDiscoveredMoviesState, SetDiscoveredMoviesTypes } from "../types/actionFetchMoviesTypes";

const INITIAL_STATE: ISetDiscoveredMoviesState = {
    movies: [],
    error: '',
}

const fetchMovieReducer = (state = INITIAL_STATE, action: SetDiscoveredMoviesTypes): ISetDiscoveredMoviesState => {
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