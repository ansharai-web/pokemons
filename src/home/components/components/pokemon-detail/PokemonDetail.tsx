import * as React from 'react'
import {useParams} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {pokemonDetailSelector} from './redux/pokemonDetail.reducers'
import styled, {keyframes} from 'styled-components'
import Example from '../../../../assets/img/pokemon_ball.png'
import {useState} from 'react'
import PokemonBall from '../../../../assets/img/pokemon_ball.png'

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


`
const InnerPokemonDetailCard = styled(CenterDiv)`
 width:410px;
 height:560px;
 background-color: #CAD553; 
 border:1px solid;
 box-shadow:3px 3px 3px 3px #8A8C4C;
 border-radius:10px;
 position: absolute;

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

interface IBadgeProps {
    badgeColor?: string
    backgroundColor?: string
    badgeTransform?: string

}

const Badge = styled.span`
margin-left:3px;
    display: inline-block;
    padding: .25em .4em;
    font-size: 75%;
    font-weight: 700;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: .25rem;
    color: ${(props: IBadgeProps) => props.badgeColor || 'white'};
    background-color: ${(props: IBadgeProps) => props.backgroundColor || 'black'};
    text-transform:${(props: IBadgeProps) => props.badgeTransform || 'none'};
   
`
const TwoColumnOrderedList = styled.ul`
    -webkit-columns: 2;
    -moz-columns: 2;
    columns: 2;
    `
const PokemonStats = styled.p`
margin: 0;
    padding: 0;
    text-align: center;
`

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
const ShowGalleryPokemonButton = styled.button`
border-radius: 10px;
    text-transform: uppercase;
    padding-left: 10px;
    padding-right: 10px;
    display: flex;
    align-items: center;
`
const PokemonDetailFC: React.FC<IPokemonDetailProps> = props => {
    const params: any = useParams()
    const pokemonDetail = useSelector(pokemonDetailSelector)
    const [showGallery, setShowGallery] = useState(false)
    const id: string = params.id
    // @ts-ignore
    const currPokemon = pokemonDetail[id]

    console.log(currPokemon, 'currPokemon')
    // TODO BETTER IMPLEMENTATION
    if (!currPokemon) {
        return <h2>No pokemon Details Available</h2>
    }

    return (
        <div style={{display: 'flex', marginTop: '100px', marginLeft: '30px'}}>
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
                        <img src={Example} alt={'pokemon detail '} width={'100%'} height='100%'/>
                    </PokemonImage>
                    <PokomenInformation>
                        {currPokemon.name} weight: {currPokemon.weight} lbs, height: {currPokemon.height} inches
                    </PokomenInformation>
                    <div style={{marginTop: '5%', marginLeft: '3%'}}>
                        {currPokemon.types.map((type: any, index: number) => {
                            return <Badge
                                backgroundColor=' #C6D3E6'
                                badgeColor='#505E67'
                                badgeTransform='capitalize'
                                key={`type_${type.name}_${index}`}>{type.type.name || ''}</Badge>
                        })}
                    </div>
                    <div>
                        <PokemonStats>
                            <Badge backgroundColor=' #C6D3E6' badgeColor='#505E67'
                                   badgeTransform='uppercase'>{currPokemon.name} Stats</Badge>
                        </PokemonStats>
                        <TwoColumnOrderedList>
                            {currPokemon.stats.map((detail: any, index: number) => {
                                return <li
                                    key={`stats_${detail.stat.name}_${index}`}> {detail.stat.name}: {detail.base_stat}</li>
                            })}

                        </TwoColumnOrderedList>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <ShowGalleryPokemonButton onClick={() => setShowGallery(true)}>Show
                            Gallery
                            <img src={PokemonBall} alt="pokemon ball" width={20}/>
                        </ShowGalleryPokemonButton>
                    </div>

                </InnerPokemonDetailCard>
            </PokemonDetailCard>
            {showGallery && <PokemonPhotos>
                {currPokemon?.sprites.map((img: string, index: string) =>
                    <div style={{width: '150px', height: '70px', margin: '5px'}}>
                        <img src={img}
                             key={`${currPokemon.name}_image_${index}`}
                             alt={`${currPokemon.name}_image_${index}`}/>
                    </div>
                )}
            </PokemonPhotos>}
        </div>
    )
}

export const PokemonDetail = PokemonDetailFC
