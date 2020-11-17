import {IPokemonDetailReducer} from './pokemonDetail.reducers'

export const SAVE_POKEMON_DETAIL = 'SAVE_POKEMON_DETAIL'


export const savePokemonDetailAction = (pokemonDetail: IPokemonDetailReducer) => ({type:SAVE_POKEMON_DETAIL,payload: pokemonDetail})
