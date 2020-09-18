import {combineReducers} from 'redux'
import {pokemonListReducer} from './home/redux/home.reducers'
import {pokemonDetailReducer} from './home/components/components/pokemon-detail/redux/pokemonDetail.reducers'
import {IPokemon, IPokemonDetailMapper} from './home/PokemonInterfaces'


export interface  IAction {
    type: string,
    payload: any,
    meta: any
}

export interface IHomeReducers {
    pokemonList: IPokemon[]
    pokemonDetail: IPokemonDetailMapper | {}
}

export interface IRootState {
    home: IHomeReducers
}
 const homeReducers = combineReducers<IHomeReducers>({
    pokemonList: pokemonListReducer,
    pokemonDetail: pokemonDetailReducer
})

export const rootReducers = combineReducers<IRootState>({
    home: homeReducers
})

