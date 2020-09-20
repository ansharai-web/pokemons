import {FETCH_POKEMONS, SEARCH_POKEMON} from './home.actions'
import {createSelector} from 'reselect'
import {IAction, IHomeReducers, IRootState} from '../../reducers'
import {IPokemon} from '../PokemonInterfaces'

export const homeBaseSelector = (state: IRootState): IHomeReducers => state.home

export const pokemonListReducer = (state: IPokemon[] = [], action: IAction): IPokemon[] => {
    switch (action.type) {
        case FETCH_POKEMONS:
            return action.payload
        default:
            return state
    }
}
const pokemonListSelector = createSelector(
    homeBaseSelector,
    (home) => home.pokemonList
)
export const searchedPokemonReducer = (state: string = '', action: IAction): string => {
    switch (action.type) {
        case SEARCH_POKEMON:
            return action.payload
        default:
            return state
    }
}
const searchedPokemonSelector = createSelector(
    homeBaseSelector,
    (home) => home.searchedPokemon
)


export const filteredPokemonListByNameSelector = createSelector(
    pokemonListSelector,
    searchedPokemonSelector,
    (pokemonList, searchedPokemon) =>
    searchedPokemon && pokemonList.length > 0 ? pokemonList.filter((pokemon) => pokemon.name.includes(searchedPokemon)) : pokemonList

)


