import * as React from 'react'
import PokemonBall from '../../../../../assets/img/pokemon_ball.png'
import styled from 'styled-components'

interface IPokemonShowGalleryButtonProps {
    handleGallery: () => void
}

const ShowGalleryPokemonButton = styled.button`
border-radius: 10px;
    text-transform: uppercase;
    padding-left: 10px;
    padding-right: 10px;
    display: flex;
    align-items: center;
`
const PokemonShowGalleryButtonFC: React.FC<IPokemonShowGalleryButtonProps> = ({handleGallery}) => {
     return (
         <div style={{display: 'flex', justifyContent: 'center'}}>
             <ShowGalleryPokemonButton onClick={handleGallery}>Show
                 Gallery
                 <img src={PokemonBall} alt="pokemon ball" width={20}/>
             </ShowGalleryPokemonButton>
         </div>
       )
}

export const PokemonShowGalleryButton = PokemonShowGalleryButtonFC
