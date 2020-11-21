import { call, put, takeLatest } from 'redux-saga/effects'
import { ERROR_FETCH_MOVIES, IFetchMoviesAction, FETCH_MOVIES, SET_DISCOVERED_MOVIES, SET_RESEARCHING } from '../types/actionFetchMoviesTypes';
import { searchMoviesService } from '../../services'
import { ICardMovieDetailParams } from '../../components/CardMovieDetail/types';

const stateFetchMovies = function* (action: IFetchMoviesAction) {
    try {
        yield put({ type: SET_RESEARCHING });
        const movies: Array<ICardMovieDetailParams> = yield call(searchMoviesService, action.query);
        yield put({ type: SET_DISCOVERED_MOVIES, movies });
    } catch (e) {
        yield put({ type: ERROR_FETCH_MOVIES, error: e.message });
    }
}

const fetchMovies = function* () {
    yield takeLatest(FETCH_MOVIES, stateFetchMovies);
}

export default fetchMovies;