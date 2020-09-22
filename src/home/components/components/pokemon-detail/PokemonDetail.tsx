import * as React from 'react'
import {useEffect, useState} from 'react'
import {Provider, useSelector} from 'react-redux'
import {IPartialPokemonDetails, pokemonDetailSelector} from './redux/pokemonDetail.reducers'
import styled from 'styled-components'
import Example from '../../../../assets/img/pokemon_ball.png'
import {PokemonPhotosGallery} from './components/PokemonPhotosGallery'
import {PokemonShowGalleryButton} from './components/PokemonShowGalleryButton'
import {PokemonTypes} from './components/PokemonTypes'
import {PokemonInfo} from './components/PokemonInfo'
import {Link, useHistory, useParams} from 'react-router-dom'
import { MissingPokemon } from './MissingPokemon'

interface IPokemonDetailProps {
}

const CenterDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`
const PokemonDetailCard = styled.div`
 width:450px;
 height:600px;
 background-color: #C3C86C; 
 border:3px solid #9AA472;
 border-radius:10px;
 position: relative;
@media (min-width: 320px) and (max-width:450px){
width:100%;
height:600px;


}
  @media (min-width: 768px) and (max-width:800px){
  margin: auto;
  margin-top:10px;
  }

`
const InnerPokemonDetailCard = styled(CenterDiv)`
 width:410px;
 height:560px;
 background-color: #CAD553; 
 border:1px solid;
 box-shadow:3px 3px 3px 3px #8A8C4C;
 border-radius:10px;
 position: absolute;
 @media (min-width: 320px) and (max-width:450px){
width:95%;
}


`
const PokemonCardHeader = styled.div`

    display: flex;
    justify-content: space-between;
    align-items:center;
`
const PokemonBadge = styled.span`
    background-color: #C6D3E6;
    text-transform:uppercase;
    color: #505E67;
    border:1px solid black;
    border-radius: 10px;
    height: fit-content;
    padding-right:10px;
    padding-left:10px;
    font-weight:800;
    margin-left:-7px;
`
const PokemonName = styled.h3`
 text-transform: capitalize;
 margin-left: 20px;
 letter-spacing: 2px;
`
const PokemonHeaderLeft = styled.div`
display:flex;
align-items:center;
`
const PokemonLifeText = styled.span`
font-size:12px;
font-weight: bold;
`
const PokemonLifeValue = styled.span`
font-size:20px;
font-weight: bold;
margin-left: 2px;
`
const PokemonImage = styled.div`
width:90%;
border:5px solid gray;
height: 40%;
background-color: yellow;
margin: auto;
`
const PokomenInformation = styled.div`
    width:90%;
    border-top: 1px;
    border-bottom: 5px;
    border-right: 5px;
    border-left: 5px;
     border-bottom-left-radius: 13px;
     border-bottom-right-radius: 13px;
    border-style:solid;
    border-color: gray;    
margin: auto;
height:10%
background-color:gray;
display: flex;
justify-content:center;
`
const PokemonDetailContainer = styled.div`

@media (min-width:900px) {
 display: flex;
 margin-top: 100px;
 margin-left: 30px;
}
`

const PokemonDetailFC: React.FC<IPokemonDetailProps> = props => {
    const params: any = useParams()
    const pokemonDetail: any = useSelector(pokemonDetailSelector)
    const id: string = params.id
    const currPokemon: IPartialPokemonDetails = pokemonDetail[id]
    const [showGallery, setShowGallery] = useState(false)

    return (
        <>
        {!currPokemon ? <MissingPokemon /> :
        <PokemonDetailContainer >
            <PokemonDetailCard>
                <InnerPokemonDetailCard>
                    <PokemonCardHeader>
                        <PokemonHeaderLeft>
                            <PokemonBadge>basic</PokemonBadge>
                            <PokemonName>{currPokemon.name}</PokemonName>
                        </PokemonHeaderLeft>
                        <div style={{marginRight: '20px'}}>
                            <PokemonLifeText>HP</PokemonLifeText><PokemonLifeValue>60</PokemonLifeValue> &#10084;
                        </div>
                    </PokemonCardHeader>
                    <PokemonImage>
                        <img src={currPokemon.sprites[0]} alt={'pokemon detail '} width={'100%'} height='100%'/>
                    </PokemonImage>
                    <PokomenInformation>
                        {currPokemon.name} weight: {currPokemon.weight} lbs, height: {currPokemon.height} inches
                    </PokomenInformation>
                    <PokemonTypes types={currPokemon.types}/>
                    <PokemonInfo stats={currPokemon.stats} name={currPokemon.name}/>
                    <PokemonShowGalleryButton handleGallery={() => setShowGallery(!showGallery)} showGallery={showGallery}/>
                    <Link to='/' style={{position:'absolute', color: '#000',fontSize:'30px', bottom:'10px', left:'10px'}}>Go Back</Link>
                </InnerPokemonDetailCard>
            </PokemonDetailCard>
            {showGallery && <PokemonPhotosGallery sprites={currPokemon.sprites} name={currPokemon.name}/>}
        </PokemonDetailContainer>}
        </>
    )
}

export const PokemonDetail = PokemonDetailFC
