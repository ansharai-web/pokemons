import * as React from 'react'
import styled, {keyframes} from 'styled-components'

interface IPokemonPhotosGalleryProps {

    sprites: string[]
    name: string
}

const fadeIn = keyframes`
from{opacity:0}
to{opacity:1}
`

const PokemonPhotos = styled.section`
    width: 1000px;
    height:600px;
    display:flex;
    margin-left:50px;
    flex-wrap: wrap;
    overflow: auto;
    background-color:rgba(0,0,0, .6);
    animation: ${fadeIn} 2s ease-in;
    & img {
    width: 100%;
    height: 100%;
    }
  
`

const PokemonPhotosGalleryFC: React.FC<IPokemonPhotosGalleryProps> = ({sprites, name }) => {
    return (

        <PokemonPhotos>
            {sprites.map((img: string, index: number) =>
                <div style={{width: '150px', height: '70px', margin: '5px'}} key={`${name}_image_${index}`}>
                    <img src={img} alt={`${name}_image_${index}`}/>
                </div>
            )}
        </PokemonPhotos>

    )
}

export const PokemonPhotosGallery = PokemonPhotosGalleryFC
