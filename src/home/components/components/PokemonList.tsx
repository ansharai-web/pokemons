import * as React from 'react'
import {useSelector} from 'react-redux'
import {filteredPokemonListByNameSelector} from '../../redux/home.reducers'
import {Card} from './components/Card'
import {LoadingCard} from './components/LoadingCard'
import {useScroll} from '../../../utils'

interface IPokemonListProps {
    loading: boolean
    errored: boolean
}

const DEFAULT_LIST_LENGTH = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

// TODO LOGIC WHEN THE DATA IS FETCHING AND WHEN THE DATA IS ERRORING
const PokemonListFC: React.FC<IPokemonListProps> = ({loading, errored}) => {

    const pokemonList = useSelector(filteredPokemonListByNameSelector)
    const {currentItemesNumber} = useScroll(pokemonList)


    const errorMessage = 'Oops something went wrong!'
    const noItemsFoundMessage = 'No items found!'

    const loadingCardList = DEFAULT_LIST_LENGTH.map((empty: any, index: number) => <LoadingCard
        key={`loading_card_${index}`}/>)
    const cardList = pokemonList.slice(0, currentItemesNumber).map((pokemon, index) => <Card key={index} {...pokemon}/>)
    const notFoundOrError = <h3>{errored ? errorMessage : noItemsFoundMessage}</h3>
    return (
        <>

            <div style={{display: 'flex', flexWrap: 'wrap', width: '1200px', margin: 'auto'}}>
                {
                    loading ?
                        loadingCardList : pokemonList.length > 0 ?
                        cardList : notFoundOrError}
            </div>


        </>
    )
}

export const PokemonList = PokemonListFC


