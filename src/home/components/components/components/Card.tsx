import * as React from 'react'
import styled, {keyframes} from 'styled-components'
import  Pokemon_Ball from '../../../../assets/img/pokemon_ball.png'
import {Link} from 'react-router-dom'
import {savePokemonDetailAction} from '../pokemon-detail/redux/pokemonDetail.actions'
import {useDispatch} from 'react-redux'

const Filledbar = styled.div`
    position: absolute;
    top: 0px;
    z-index: 3;
    width: 0px;
    height: 100%;
    background: rgb(0,154,217);
    background: linear-gradient(90deg, rgba(0,154,217,1) 0%, rgba(217,147,0,1) 65%, rgba(255,186,0,1) 100%);
    transition: 0.6s ease-out;
`
 const rotate = keyframes`
    from{
        transform: rotate(0deg)
    }
    to {
    transform: rotate(360deg)
    }

`

const CardImageContainer = styled.div`
    position: absolute;
    bottom:60px;
    left: 55px;
    width: 80px;
   
`


export const StyledCard = styled.div`
display: flex;
height: 280px;
width: 220px;
background-color: #17141d;
border-radius:10px;
box-shadow: -1rem 0 3rem #000;
transition: 0.4s ease-out;
position:relative;
margin: 10px 20px;
opacity: 0.7;
&:hover {
transform: translateY(-20px);
opacity: 1;
}
  &:hover ${Filledbar} {
    width:120px;
    transition: 0.4s ease-out;
  }
  &:hover ${CardImageContainer} {

   animation: ${rotate} 0.4s ease-out;
  }
`
const StyledCardTitle = styled.h4`
    color: white;
    font-weight:300px;
    position: absolute;
    left: 20px;

    top:15px;
`


const Bar = styled.div`
  position: absolute;
  top: 100px;
  left: 20px;
  height: 5px;
  width: 150px;
`
const Emptybar = styled.div`
     background-color: #2e3033;
    width: 100%;
    height: 100%;
 `

const CardLink = styled(Link)`
 color:white;
 position: absolute;
 bottom:20px;
 left:30px;
 `




interface ICardProps {
    name: string
    url: string
}


const CardFC: React.FC<ICardProps> = ({name, url}) => {
    const dispatch = useDispatch();

    const fetchPokemonDetail = async () => {
            const pokemonDetail = await fetch(url)
        return pokemonDetail.json()
    }
//TODO FIX INTERFACE
    const handlePokemonDetail = async (e:  any) => {
        fetchPokemonDetail().then(data => dispatch(savePokemonDetailAction(data)))
        //Logic

    }

    return (<StyledCard>
            <StyledCardTitle>{name}</StyledCardTitle>
            <Bar>
                <Emptybar/>
                <Filledbar/>
            </Bar>
            <CardImageContainer>
                <img src={Pokemon_Ball} alt='pokemon ball' width='100%'/>
            </CardImageContainer>
            <CardLink to={name} onClick={handlePokemonDetail}>Click to find more</CardLink>
        </StyledCard>
    )
}

export const Card = CardFC
