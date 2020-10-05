import { CardDetailSearchParams } from "../../components/CardMovieDetail/types";
import { SetDiscoveredMoviesAction, FetchMoviesAction, SET_DISCOVERED_MOVIES, FETCH_MOVIES } from "../types/actionFetchMoviesTypes";

export const setDiscoveredMovies = (movies: Array<CardDetailSearchParams>): SetDiscoveredMoviesAction => ({
    type: SET_DISCOVERED_MOVIES,
    error: '',
    movies,
})

export const fetchMovies = (query: string): FetchMoviesAction => ({
    type: FETCH_MOVIES,
    query,
})