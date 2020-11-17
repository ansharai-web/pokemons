import {useDispatch} from 'react-redux'
import {useCallback, useEffect, useState} from 'react'
import {fetchPokemonsAction} from './redux/home.actions'

export const useFetchPokemons = () => {
    //React hook
    const dispatch = useDispatch();
    const [loading, setIsloading] = useState(false)
    const [errored, setErrored] = useState(false)

    const fetchPokemons = useCallback(async () => {
        // assuming that the data wont change often we can improve the performance and save it into the local staorage
        const pokemonListFromLocalStorage = localStorage.getItem('pokemonList')
        if(pokemonListFromLocalStorage){
            console.info('Data present into the localstarage')
            dispatch(fetchPokemonsAction(JSON.parse(pokemonListFromLocalStorage)))
            return
        }

        try{
            setIsloading(true)
            const pokemonList = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1050')

            pokemonList.json().then(data =>{
                    dispatch(fetchPokemonsAction(data.results))
                    localStorage.setItem('pokemonList',JSON.stringify(data.results))
                    setIsloading(false)
                    setErrored(false)
            }
            );
        }catch(e){
            setErrored(true)
            setIsloading(false)
        }

    },[dispatch])

    useEffect(() => {
        fetchPokemons()
    }, [dispatch, fetchPokemons])
    return{
        loading,
        errored,
        dispatch
    }
}
