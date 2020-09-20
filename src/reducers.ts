import {combineReducers} from 'redux'
import {pokemonListReducer, searchedPokemonReducer} from './home/redux/home.reducers'
import {
    IPokemonDetailReducer,
    pokemonDetailReducer
} from './home/components/components/pokemon-detail/redux/pokemonDetail.reducers'
import {IPokemon} from './home/PokemonInterfaces'


export interface IAction {
    type: string,
    payload: any,
    meta: any
}

export interface IHomeReducers {
    pokemonList: IPokemon[]
    pokemonDetail: IPokemonDetailReducer | {}
    searchedPokemon: string
}

export interface IRootState {
    home: IHomeReducers
}

const homeReducers = combineReducers<IHomeReducers>({
    pokemonList: pokemonListReducer,
    searchedPokemon: searchedPokemonReducer,
    pokemonDetail: pokemonDetailReducer
})

export const rootReducers = combineReducers<IRootState>({
    home: homeReducers
})

