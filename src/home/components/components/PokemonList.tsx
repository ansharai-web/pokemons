import * as React from 'react'
import {useSelector} from 'react-redux'
import {pokemonListSelector} from '../../redux/home.reducers'
import {Card} from './components/Card'
import {LoadingCard} from './components/LoadingCard'

interface IPokemonListProps {
    loading: boolean
    errored: boolean
}

// TODO LOGIC WHEN THE DATA IS FETCHING AND WHEN THE DATA IS ERRORING
const PokemonListFC: React.FC<IPokemonListProps> = ({loading, errored}) => {

    const pokemonList = useSelector(pokemonListSelector)
    const defaultListLength = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    // TODO MOVE INTO A CONST FILE
    const errorMessage = 'Oops something went wrong!'
    const noItemsFoundMessage = 'No items found!'

    return (
        <>

            <div style={{display: 'flex', flexWrap: 'wrap', width: '1200px', margin: 'auto'}}>
                {
                    loading ? defaultListLength.map((empty: any, index: number) => <LoadingCard
                            key={`loading_card_${index}`}/>) :
                        pokemonList.length > 0 ? pokemonList.slice(0, 20).map((pokemon, index) => {
                            return (
                                <Card key={index} {...pokemon}/>
                            )
                        }) : <h3>
                            {errored ? errorMessage : noItemsFoundMessage}
                        </h3>}
            </div>


        </>
    )
}

export const PokemonList = PokemonListFC


