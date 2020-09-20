import * as React from 'react'
import {ChangeEvent} from 'react'
import {PokemonList} from './components/components/PokemonList'
import {useFetchPokemons} from './fetch-pokemons'
import { LoadingCard } from './components/components/components/LoadingCard'

interface IHomeProps {
}

const HomeFC: React.FC<IHomeProps> = () => {
    // The logc for fetching the pokemon list is contained into this hook
    const {loading,errored} =useFetchPokemons()

    const handlePokemonChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log('POKEMON', e.target.value)
        // TODO LOGIC
    }
    return (
        <>
            <div>
                <input type='search' placeholder='Filter pokemons' onChange={handlePokemonChange}/>
                <PokemonList loading={loading} errored={errored} />
            </div>
        </>
    )
}

export const Home = HomeFC
