import * as React from 'react'
import {ChangeEvent} from 'react'
import styled from 'styled-components'
import {searchPokemonAction} from '../../../../redux/home.actions'
import {useDispatch} from 'react-redux'

interface ISearchPokemonInputProps {
}

const SearchContainer = styled.div`
display: flex;
    justify-content: center;
    margin-bottom: 4%;
    margin-top: 3%;
`
const SearchInput = styled.input`
color: black;  
text-align: left;
cursor: pointer;
display: block; 
padding: 6px;
      font-size:18px;
text-shadow: 0 0 2px black;       
word-spacing: 10px;   
`

const SearchPokemonInputFC: React.FC<ISearchPokemonInputProps> = () => {

    const dispatch = useDispatch()

    const handlePokemonChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(searchPokemonAction(e.target.value))

    }
    return (
        <SearchContainer>
            <SearchInput  placeholder='Search pokemon ' onChange={handlePokemonChange}/>
        </SearchContainer>
    )
}

export const SearchPokemonInput = SearchPokemonInputFC
