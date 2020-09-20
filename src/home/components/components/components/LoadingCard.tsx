import * as React from 'react'
import styled, {keyframes} from 'styled-components'
import { StyledCard } from './Card'

interface ILoadingCardProps {}


const placeHolderShimmer = keyframes`{
  0% {
    background-position: -468px 0
  }
  100% {
    background-position: 468px 0
  }
}`

const Animation = styled.div`
  animation-duration: 10s;
  animation-fill-mode: forwards;
height: 280px;
width: 220px;
  animation-iteration-count: infinite;
  animation-name: ${placeHolderShimmer};
  animation-timing-function: linear;
  background: #333;
  background: linear-gradient(to right, #555 10%, #555 15%, #333 100%);
  position: relative;
  border-radius: 8px; // Material 2.0
`

/*background: linear-gradient(to right, #ededed 10%, #ededed 18%, #f1f1f1 33%);*/



const LoadingCardFC: React.FC<ILoadingCardProps> = props => {

     return (
         <StyledCard>
             <Animation/>
         </StyledCard>
       )
}

export const LoadingCard = LoadingCardFC

