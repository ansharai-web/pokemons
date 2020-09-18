import * as React from 'react'
import {useParams} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {pokemonDetailSelector} from './redux/pokemonDetail.reducers'
import styled from 'styled-components'

interface IPokemonDetailProps {
}


const PokemonDetailCard = styled.div`
 width:450px;
 height:600px;
 background-color: blue; 
 border:3px solid black;
 border-radius:10px;
 position: absolute;
`
const InnerPokemonDetailCard = styled.div`
 width:410px;
 height:560px;
 background-color: red; 
 border:3px solid black;
 border-radius:10px;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`


const PokemonDetailFC: React.FC<IPokemonDetailProps> = props => {
    const params: any = useParams()
    const pokemonDetail = useSelector(pokemonDetailSelector)
    const id: string = params.id
    // @ts-ignore
    const currPokemon = pokemonDetail[id]


    /* // TODO BETTER IMPLEMENTATION
        if(!currPokemon){
            return <h2>No pokemon Details Available</h2>
        }*/

    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <PokemonDetailCard>
                <InnerPokemonDetailCard>
                    S
                </InnerPokemonDetailCard>
            </PokemonDetailCard>
            {/*                <div style={{display: 'flex', justifyContent:'center'}}>
                      <h1>{currPokemon.name}</h1>
                  </div>*/}

        </div>
    )
}

export const PokemonDetail = PokemonDetailFC
