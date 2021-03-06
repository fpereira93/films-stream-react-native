import { IMovieItem } from "../../services/movie/types";

export const SET_DISCOVERED_MOVIES = 'SET_DISCOVERED_MOVIES';
export const CLEAR_DISCOVERED_MOVIES = 'CLEAR_DISCOVERED_MOVIES';
export const SET_RESEARCHING = 'SET_RESEARCHING';
export const ERROR_FETCH_MOVIES = 'ERROR_FETCH_MOVIES';
export const FETCH_MOVIES = 'FETCH_MOVIES';

export interface ISetDiscoveredMoviesState {
    error: string
    movies: Array<IMovieItem>
    researching: boolean,
}
export interface ISetDiscoveredMoviesAction extends ISetDiscoveredMoviesState {
    type: typeof SET_DISCOVERED_MOVIES
}

export interface IFetchMoviesState {
    query: string
}
export interface IFetchMoviesAction extends IFetchMoviesState {
    type: typeof FETCH_MOVIES
}

export interface IErrorFetchMoviesState {
    error: string
}
export interface IErrorFetchMoviesAction extends IErrorFetchMoviesState {
    type: typeof ERROR_FETCH_MOVIES
}

export interface IClearFetchMoviesAction {
    type: typeof CLEAR_DISCOVERED_MOVIES
}

export interface ISetResearchingMoviesAction {
    type: typeof SET_RESEARCHING
}

export type SetDiscoveredMoviesTypes =
    IClearFetchMoviesAction |
    ISetDiscoveredMoviesAction |
    ISetResearchingMoviesAction |
    IFetchMoviesAction |
    IErrorFetchMoviesAction
