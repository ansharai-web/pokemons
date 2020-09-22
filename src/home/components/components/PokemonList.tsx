import * as React from 'react'
import {useSelector} from 'react-redux'
import {filteredPokemonListByNameSelector} from '../../redux/home.reducers'
import {Card} from './components/Card'
import {LoadingCard} from './components/LoadingCard'
import {useScroll} from '../../../utils'
import {SearchPokemonInput} from './pokemon-detail/components/SearchPokemonInput'
import styled from 'styled-components'

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

    const ListContainer = styled.div`

width: 70%;
display: flex;
flex-wrap: wrap;
justify-content:center;
margin: auto;
    
@media  (min-width:280px) and (max-width: 420px){
width: 95%;
margin: auto;
    display: flex ;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
@media (min-width: 500px) and (max-width: 760px) {
width: 97%;
    display: flex ;
    flex-wrap: wrap;
    margin: auto;

}
@media (min-width:760px) and (max-width:1024px){
width: 95%;
margin: auto;
    display: flex ;
    flex-wrap: wrap;
    justify-content: center;
}
@media (min-width:1024px) and (max-width:1080px){
  width: 100%;
  margin:auto;  
  display: flex;
  flex-wrap: wrap;
  justify-content:center;
}

@media (min-width:1080px) and (max-width:1366px){
width: 95%;
display: flex;
flex-wrap: wrap;
margin:auto;
justify-content: center;
}
@media (min-width:1366px) and (max-width:1442px){
width: 90%;
display: flex;
flex-wrap: wrap;
justify-content:center;
margin: auto;
}
@media (min-width:1442px) and (max-width:1624px){
width: 80%;
display: flex;
flex-wrap: wrap;
justify-content:center;
margin: auto;
}
@media (min-width:1858px){
width: 60%;
display: flex;
flex-wrap: wrap;
justify-content:center;
margin: auto;
}

`
    return (
        <div>
            <SearchPokemonInput/>

            <ListContainer>

                {
                    loading ?
                        loadingCardList : pokemonList.length > 0 ?
                        cardList : notFoundOrError}
            </ListContainer>


        </div>
    )
}

export const PokemonList = PokemonListFC


