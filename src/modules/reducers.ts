import { combineReducers } from "redux";
import { pokemonReducers } from "./pokemon/reducers";

const reducers = combineReducers({
    pokemon: pokemonReducers
});

export type RootState = ReturnType<typeof reducers>;

export default reducers;