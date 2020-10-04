import { all } from 'redux-saga/effects';
import fetchMovies from './fetchMoviesSaga';

const rootSaga = function* () {
    yield all([
        fetchMovies(),
    ])
}

export default rootSaga