import * as React from 'react'
import PokemonBall from '../../../../../assets/img/pokemon_ball.png'
import styled from 'styled-components'

interface IPokemonShowGalleryButtonProps {
    handleGallery: () => void
    showGallery: boolean
}

const ShowGalleryPokemonButton = styled.button`
border-radius: 10px;
    text-transform: uppercase;
    padding-left: 10px;
    padding-right: 10px;
    display: flex;
    align-items: center;
`
const SHOW_GALLERY_TEXT = 'Show Gallery'
const HIDE_GALLERY_TEXT = 'Hide Gallery'
const PokemonShowGalleryButtonFC: React.FC<IPokemonShowGalleryButtonProps> = ({handleGallery,showGallery}) => {

     return (
         <div style={{display: 'flex', justifyContent: 'center'}}>
             <ShowGalleryPokemonButton onClick={handleGallery}>{!showGallery ? SHOW_GALLERY_TEXT : HIDE_GALLERY_TEXT}
                 <img src={PokemonBall} alt="pokemon ball" width={20}/>
             </ShowGalleryPokemonButton>
         </div>
       )
}

export const PokemonShowGalleryButton = PokemonShowGalleryButtonFC
