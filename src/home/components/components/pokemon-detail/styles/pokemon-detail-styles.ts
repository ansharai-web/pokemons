import styled from 'styled-components'

// This component should stay into same shared folder
export const CenterDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`
export const PokemonDetailCard = styled.div`
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
export const InnerPokemonDetailCard = styled(CenterDiv)`
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
export const PokemonCardHeader = styled.div`

    display: flex;
    justify-content: space-between;
    align-items:center;
`
export const PokemonBadge = styled.span`
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
export const PokemonName = styled.h3`
 text-transform: capitalize;
 margin-left: 20px;
 letter-spacing: 2px;
`
export const PokemonHeaderLeft = styled.div`
display:flex;
align-items:center;
`
export const PokemonLifeText = styled.span`
font-size:12px;
font-weight: bold;
`
export const PokemonLifeValue = styled.span`
font-size:20px;
font-weight: bold;
margin-left: 2px;
`
export const PokemonImage = styled.div`
width:90%;
border:5px solid gray;
height: 40%;
background-color: yellow;
margin: auto;
`
export const PokomenInformation = styled.div`
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
export const PokemonDetailContainer = styled.div`

@media (min-width:900px) {
 display: flex;
 margin-top: 100px;
 margin-left: 30px;
}
`
