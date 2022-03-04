import { all, fork } from '@redux-saga/core/effects';

import { pokemonWatchers } from './pokemon';

export function* rootSaga() {
    yield all([
        fork(pokemonWatchers)
    ]);
};