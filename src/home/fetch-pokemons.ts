import {useDispatch} from 'react-redux'
import {useCallback, useEffect} from 'react'
import {fetchPokemonsAction} from './redux/home.actions'

export const useFetchPokemons = () => {
    //React hook
    const dispatch = useDispatch();

    const fetchPokemons = useCallback(async () => {
        const pokemonList = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1050')
        pokemonList.json().then(data =>
            dispatch(fetchPokemonsAction(data.results)))
    },[dispatch])

    useEffect(() => {
        //TODO ADD LOGIC IF DATA IS ALREADY PRESENT
        fetchPokemons()
    }, [dispatch, fetchPokemons])

}
