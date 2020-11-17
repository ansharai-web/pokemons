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
  @media (min-width: 320px) and (max-width:450px){
width:100%;
  height:auto;
display: flex;
flex-direction: column;
   margin-left:0px;
}
  @media (min-width: 768px) and (max-width:800px){
    width: 95%;
    height: 330px;
    margin: auto;
    /* margin-left: 0px; */
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
  }
`

const ImageContainer = styled.div`
width: 150px;
 height: 70px;
  margin: 5px;
    @media (min-width: 320px) and (max-width:450px){
width:100%;
}
  @media (min-width: 768px) and (max-width:800px){
  width: 30%;
    height: 50%;
    margin: 5px;
  }

`

const PokemonPhotosGalleryFC: React.FC<IPokemonPhotosGalleryProps> = ({sprites, name }) => {
    return (

        <PokemonPhotos>
            {sprites.map((img: string, index: number) =>
                <ImageContainer  key={`${name}_image_${index}`}>
                    <img src={img} alt={`${name}_image_${index}`}/>
                </ImageContainer>
            )}
        </PokemonPhotos>

    )
}

export const PokemonPhotosGallery = PokemonPhotosGalleryFC
