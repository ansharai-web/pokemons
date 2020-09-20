import * as React from 'react'
import {ChangeEvent} from 'react'
import {PokemonList} from './components/components/PokemonList'
import {useFetchPokemons} from './fetch-pokemons'
import {searchPokemonAction} from './redux/home.actions'
import {useDispatch} from 'react-redux'

interface IHomeProps {
}

const HomeFC: React.FC<IHomeProps> = () => {
    // The logic for fetching the pokemon list is contained into this hook
    const {loading, errored} = useFetchPokemons()
    const dispatch = useDispatch()
    const handlePokemonChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value,)
        dispatch(searchPokemonAction(e.target.value))

    }
    return (<div>
            <input type='search' placeholder='Filter pokemons' onChange={handlePokemonChange}/>
            <PokemonList loading={loading} errored={errored}/>
        </div>
    )
}

export const Home = HomeFC
