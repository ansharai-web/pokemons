import * as React from 'react'
import {ChangeEvent} from 'react'
import {PokemonList} from './components/components/PokemonList'
import {useFetchPokemons} from './fetch-pokemons'

interface IHomeProps {
}

const HomeFC: React.FC<IHomeProps> = () => {
    // The logc for fetching the pokemon list is contained into this hook
    useFetchPokemons()

    const handlePokemonChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log('POKEMON', e.target.value)
        // TODO LOGIC
    }
    return (
        <>
            <div>
                <input type='search' placeholder='Filter pokemons' onChange={handlePokemonChange}/>
                <PokemonList/>
            </div>
        </>
    )
}

export const Home = HomeFC
