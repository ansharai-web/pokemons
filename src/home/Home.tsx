import * as React from 'react'
import {PokemonList} from './components/components/PokemonList'
import {useFetchPokemons} from './fetch-pokemons'


interface IHomeProps {
}

const HomeFC: React.FC<IHomeProps> = () => {
    // The logic for fetching the pokemon list is contained into this hook
    const {loading, errored} = useFetchPokemons()


    return (<div>

            <PokemonList loading={loading} errored={errored}/>
        </div>
    )
}

export const Home = HomeFC
