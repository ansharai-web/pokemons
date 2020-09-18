import * as React from 'react'
import {useSelector} from 'react-redux'
import {pokemonListSelector} from '../../redux/home.reducers'
import {Card} from './components/Card'

interface IPokemonListProps {
}

// TODO LOGIC WHEN THE DATA IS FETCHING AND WHEN THE DATA IS ERRORING
const PokemonListFC: React.FC<IPokemonListProps> = () => {

    const pokemonList = useSelector(pokemonListSelector)

    return (
        <>

            <div style={{display: 'flex', flexWrap:'wrap', justifyContent:'space-between', width: '800px', margin:'auto'}}>
                {pokemonList.length > 0 ? pokemonList.slice(0,9).map((pokemon,index) => {
                    return (
                        <Card key={index} {...pokemon}/>
                    )
                }) : 'No items found'}
            </div>


        </>
    )
}

export const PokemonList = PokemonListFC
