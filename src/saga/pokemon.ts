import { call, put, all, takeLatest } from '@redux-saga/core/effects';
import { SagaIterator } from 'redux-saga';
import axios from 'axios';
// import { Response } from '../types/Redux';
import { Actions, GetPokemonDetailsRequest } from '../modules/pokemon/types';

export function* getPokemon(): SagaIterator {
    try {
        const { data }: any = yield call(
            axios.get, 'https://pokeapi.co/api/v2/pokemon?limit=100'
        );

        console.log(data);
        yield put({ type: Actions.GET_POKEMON_FULFILLED, payload: data.results });
    } catch (error: any) {
        yield put({ type: Actions.GET_POKEMON_REJECTED, payload: undefined });
    }
};

export function* getPokemonDetail(action: GetPokemonDetailsRequest): SagaIterator{
    const name = action.payload
    console.log(name);
    try {
        const {data}: any = yield call(
            axios.get, `https://pokeapi.co/api/v2/pokemon/${name}`
        );

        console.log(data);
        yield put({ type: Actions.GET_POKEMON_DETAILS_FULFILLED, payload: { data: data }})
    } catch (error: any) {
        yield put({ type: Actions.GET_POKEMON_DETAILS_REJECTED, payload: undefined})
    }
}; 

export function* pokemonWatchers() {
    yield all([
        takeLatest(Actions.GET_POKEMON_START, getPokemon),
        takeLatest(Actions.GET_POKEMON_DETAILS_START, getPokemonDetail)
    ]);
};