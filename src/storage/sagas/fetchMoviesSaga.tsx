import { call, put, takeLatest } from 'redux-saga/effects'
import { ERROR_FETCH_MOVIES, FetchMoviesAction, FETCH_MOVIES, SET_DISCOVERED_MOVIES } from '../types/actionFetchMoviesTypes';
import { searchMoviesService } from '../../services'
import { CardMovieDetailParams } from '../../components/CardMovieDetail/types';

const stateFetchMovies = function* (action: FetchMoviesAction) {
    try {
        const movies: Array<CardMovieDetailParams> = yield call(searchMoviesService, action.query);
        yield put({ type: SET_DISCOVERED_MOVIES, movies });
    } catch (e) {
        yield put({ type: ERROR_FETCH_MOVIES, error: e.message });
    }
}

const fetchMovies = function* () {
    yield takeLatest(FETCH_MOVIES, stateFetchMovies);
}

export default fetchMovies;