

export interface IPokemonDetail {
    base_experience: string
    forms: IPokemonForms[],
    game_indices: IPokemonGameIndices[],
    height: number
    held_items: any[]
    id: number
    is_default: boolean
    location_area_encounters: string
    moves: IPokemonMoves
    name: string
    order: number
    species: IPokemonSpecies
    sprites: IPokemonSpirites
    stats: IPokemonStats[]
    types: IPokemonTypes[]
    weight: number

}

export interface IPokemonForms {
    name: string
    url: string
}

export interface IPokemonGameIndices {
    game_index: number
    version: {
        name: string,
        url: string
    }
}

export interface IPokemonMoves {
    move: IPokemonMove
    version_group_detail: IPokemonVersionGroupDetails
}

export interface IPokemonMove {
    name: string
    url: string
}

export interface IPokemonVersionGroupDetails {
    level_learned_at: number
    move_learn_method: {
        name: string
        url: string
    }
    version_group: {
        name: string
        url: string
    }
}

export interface IPokemonSpecies {
    name: string
    url: string
}

export interface IPokemonSpirites {
    back_default: string,
    back_female: any,
    back_shiny: string,
    back_shiny_female: string,
    front_default: string
    front_female: string,
    front_shiny: string
    front_shiny_female: string,
    other: {
        dream_world: {
            front_default: string,
            front_female: any
        }
        'official-artwork': {
            front_default: string
        }
    }
    versions: any // The api interface may change for each pokemon
    [key: string] : any
}

export interface IPokemonStats {
    base_stat: number,
    effort: number,
    stat: {
        name: string,
        url: string
    }
}

export interface IPokemonTypes {
    slot: number,
    type: {
        name: string,
        url: string
    }
}

// todo Create new file with all the interfaces with pokemons
export interface IPokemon {
    name: string,
    url: string
}


