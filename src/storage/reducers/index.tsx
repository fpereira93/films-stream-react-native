import { combineReducers } from 'redux';
import fetchMovieReducer from './fetchMoviesReducer';
import headerReducer from './headerReducer'

export const rootReducer = combineReducers({
    header: headerReducer,
    fetchMovies: fetchMovieReducer,
})

export type RootState = ReturnType<typeof rootReducer>