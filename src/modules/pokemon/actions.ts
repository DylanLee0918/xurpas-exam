import { Actions, PokemonTypes } from '../pokemon/types';

export const getPokemonList = (): PokemonTypes => ({
    payload: undefined,
    type: Actions.GET_POKEMON_START,
});

export const getPokemonByName = (name: string) => ({
    payload: name,
    type: Actions.GET_POKEMON_DETAILS_START
})