export const SET_DISCOVERED_MOVIES = 'SET_DISCOVERED_MOVIES';
export const ERROR_FETCH_MOVIES = 'ERROR_FETCH_MOVIES';
export const FETCH_MOVIES = 'FETCH_MOVIES';

export interface SetDiscoveredMoviesState {
    error: string
    movies: Array<MovieItem>
}
export interface SetDiscoveredMoviesAction extends SetDiscoveredMoviesState {
    type: typeof SET_DISCOVERED_MOVIES
}

export interface FetchMoviesState {
    query: string
}
export interface FetchMoviesAction extends FetchMoviesState {
    type: typeof FETCH_MOVIES
}

export interface ErrorFetchMoviesState {
    error: string
}
export interface ErrorFetchMoviesAction extends ErrorFetchMoviesState {
    type: typeof ERROR_FETCH_MOVIES
}

export type SetDiscoveredMoviesTypes =
    SetDiscoveredMoviesAction |
    FetchMoviesAction |
    ErrorFetchMoviesAction
