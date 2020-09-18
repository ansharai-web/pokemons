import {IPokemon} from '../PokemonInterfaces'

export const FETCH_POKEMONS = 'FETCH_POKEMONS';
export const fetchPokemonsAction = (pokemons: IPokemon[]) => ({type:FETCH_POKEMONS, payload: pokemons})
