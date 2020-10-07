import { combineReducers } from 'redux';
import fetchMovieReducer from './fetchMoviesReducer';

export const rootReducer = combineReducers({
    fetchMovies: fetchMovieReducer,
})

export type RootState = ReturnType<typeof rootReducer>