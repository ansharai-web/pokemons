import {useDispatch} from 'react-redux'
import {savePokemonDetailAction} from '../pokemon-detail/redux/pokemonDetail.actions'

export const  useFetchPokemonDetail = (url: string) => {
    const dispatch = useDispatch()
    const fetchPokemonDetail = async () => {
                // fetch pokemon detail
        const pokemonDetail = await fetch(url)
        pokemonDetail.json().then(data => {
            //dispatch redux action
            dispatch(savePokemonDetailAction(data))
        })

    }


    return {handlePokemonDetail: fetchPokemonDetail}
}
