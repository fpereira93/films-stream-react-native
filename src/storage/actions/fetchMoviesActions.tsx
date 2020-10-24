import { IFetchMoviesAction, IClearFetchMoviesAction, FETCH_MOVIES, CLEAR_DISCOVERED_MOVIES } from "../types/actionFetchMoviesTypes";

export const fetchMovies = (query: string): IFetchMoviesAction => ({
    type: FETCH_MOVIES,
    query,
})

export const clearFetchMovies = (): IClearFetchMoviesAction => ({
    type: CLEAR_DISCOVERED_MOVIES,
})