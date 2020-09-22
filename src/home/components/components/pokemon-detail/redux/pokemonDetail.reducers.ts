import {SAVE_POKEMON_DETAIL} from './pokemonDetail.actions'
import {IAction} from '../../../../../reducers'
import {createSelector} from 'reselect'
import {homeBaseSelector} from '../../../../redux/home.reducers'
import {
    IPokemonDetail,
    IPokemonSpirites,
    IPokemonStats,
    IPokemonTypes
} from '../../../../PokemonInterfaces'

export interface IPartialPokemonDetails {
    name: string
    sprites: string[]
    types: IPokemonTypes[]
    stats: IPokemonStats[]
    weight: number
    height: number
}

export interface IPokemonDetailReducer {
    [key: string]: IPartialPokemonDetails
}

export const pokemonDetailReducer = (state: IPokemonDetailReducer | {} = {}, action: IAction): IPokemonDetailReducer | {} => {
    switch (action.type) {
        case SAVE_POKEMON_DETAIL:
            // properties to display : description, sprites, type/types, stats
            //added properties  height and weight
            const payload: IPokemonDetail = action.payload
            const {name, sprites, types, stats, weight, height} = payload
            const img = groupSpirtes(sprites)
            return {...state, [name]: {name, sprites: img, types, stats, weight, height}}
        default:
            return state
    }
}
export const pokemonDetailSelector = createSelector(
    homeBaseSelector,
    (home): IPokemonDetailReducer => home.pokemonDetail
)


/***
 * @description  helper function for grouping the images from the sprite object
 *
 * */
const mapImages = (obj: IPokemonSpirites, arr: string[]) => {
    Object.keys(obj).length > 0 && Object.keys(obj).forEach((spriteKey) => {
        if (obj[spriteKey] && typeof obj[spriteKey] === 'string') {
            // push into the img array from the groupSprites
            arr.push(obj[spriteKey])
        }
        if (obj[spriteKey] && typeof obj[spriteKey] == 'object') {
            // if there is a nested object into sprites we call the function again with the object and the arr from the function groupSprites
            mapImages(obj[spriteKey], arr)
        }
    })
}
const groupSpirtes = (sprites: IPokemonSpirites): string[] => {
    const img: string[] = []
    mapImages(sprites, img)
    return img
}
