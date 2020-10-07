import { ISetDiscoveredMoviesAction, IFetchMoviesAction, SET_DISCOVERED_MOVIES, FETCH_MOVIES } from "../types/actionFetchMoviesTypes";
import { ICardMovieDetailParams } from "../../components/CardMovieDetail/types";

export const setDiscoveredMovies = (movies: Array<ICardMovieDetailParams>): ISetDiscoveredMoviesAction => ({
    type: SET_DISCOVERED_MOVIES,
    error: '',
    movies,
})

export const fetchMovies = (query: string): IFetchMoviesAction => ({
    type: FETCH_MOVIES,
    query,
})