import {useDispatch} from 'react-redux'
import {useCallback, useEffect, useState} from 'react'
import {fetchPokemonsAction} from './redux/home.actions'

export const useFetchPokemons = () => {
    //React hook
    const dispatch = useDispatch();
    const [loading, setIsloading] = useState(false)
    const [errored, setErrored] = useState(false)

    const fetchPokemons = useCallback(async () => {
        try{
            setIsloading(true)
            const pokemonList = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1050')

            pokemonList.json().then(data =>{
                    dispatch(fetchPokemonsAction(data.results))
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
        //TODO ADD LOGIC IF DATA IS ALREADY PRESENT
        fetchPokemons()
    }, [dispatch, fetchPokemons])
    return{
        loading,
        errored,
        dispatch
    }
}
