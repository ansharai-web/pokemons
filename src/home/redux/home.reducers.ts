import {FETCH_POKEMONS} from './home.actions'
import {createSelector} from 'reselect'
import {IAction, IHomeReducers, IRootState} from '../../reducers'
import {IPokemon} from '../PokemonInterfaces'


export const pokemonListReducer = (state: IPokemon[] = [], action: IAction): IPokemon[] => {
    switch (action.type) {
        case FETCH_POKEMONS:
            return action.payload
        default:
            return state
    }
}

export const homeBaseSelector = (state: IRootState): IHomeReducers => state.home

export const pokemonListSelector = createSelector(
    homeBaseSelector,
    (home) => home.pokemonList
)



