import * as React from 'react'
import {useState} from 'react'
import {useSelector} from 'react-redux'
import {IPartialPokemonDetails, pokemonDetailSelector} from './redux/pokemonDetail.reducers'
import {PokemonPhotosGallery} from './components/PokemonPhotosGallery'
import {PokemonShowGalleryButton} from './components/PokemonShowGalleryButton'
import {PokemonTypes} from './components/PokemonTypes'
import {PokemonInfo} from './components/PokemonInfo'
import {Link, useParams} from 'react-router-dom'
import {MissingPokemon} from './MissingPokemon'
import {
    InnerPokemonDetailCard,
    PokemonBadge,
    PokemonCardHeader,
    PokemonDetailCard,
    PokemonDetailContainer,
    PokemonHeaderLeft,
    PokemonImage,
    PokemonLifeText,
    PokemonLifeValue,
    PokemonName,
    PokomenInformation
} from './styles/pokemon-detail-styles'

interface IPokemonDetailProps {
}


const PokemonDetailFC: React.FC<IPokemonDetailProps> = props => {
    const params: any = useParams()
    const pokemonDetail: any = useSelector(pokemonDetailSelector)
    const id: string = params.id
    const currPokemon: IPartialPokemonDetails = pokemonDetail[id]
    const [showGallery, setShowGallery] = useState(false)

    return (
        <>
            {!currPokemon ? <MissingPokemon/> :
                <PokemonDetailContainer>
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
                            <PokemonShowGalleryButton handleGallery={() => setShowGallery(!showGallery)}
                                                      showGallery={showGallery}/>
                            <Link to='/' style={{
                                position: 'absolute',
                                color: '#000',
                                fontSize: '30px',
                                bottom: '10px',
                                left: '10px'
                            }}>Go Back</Link>
                        </InnerPokemonDetailCard>
                    </PokemonDetailCard>
                    {showGallery && <PokemonPhotosGallery sprites={currPokemon.sprites} name={currPokemon.name}/>}
                </PokemonDetailContainer>}
        </>
    )
}

export const PokemonDetail = PokemonDetailFC
