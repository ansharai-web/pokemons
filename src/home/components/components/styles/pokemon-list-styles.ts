import styled from 'styled-components'

export const ListContainer = styled.div`
width: 70%;
display: flex;
flex-wrap: wrap;
justify-content:center;
margin: auto;
    
@media  (min-width:280px) and (max-width: 420px){
width: 95%;
margin: auto;
    display: flex ;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
@media (min-width: 500px) and (max-width: 760px) {
width: 97%;
    display: flex ;
    flex-wrap: wrap;
    margin: auto;

}
@media (min-width:760px) and (max-width:1024px){
width: 95%;
margin: auto;
    display: flex ;
    flex-wrap: wrap;
    justify-content: center;
}
@media (min-width:1024px) and (max-width:1080px){
  width: 100%;
  margin:auto;  
  display: flex;
  flex-wrap: wrap;
  justify-content:center;
}

@media (min-width:1080px) and (max-width:1366px){
width: 95%;
display: flex;
flex-wrap: wrap;
margin:auto;
justify-content: center;
}
@media (min-width:1366px) and (max-width:1442px){
width: 90%;
display: flex;
flex-wrap: wrap;
justify-content:center;
margin: auto;
}
@media (min-width:1442px) and (max-width:1624px){
width: 80%;
display: flex;
flex-wrap: wrap;
justify-content:center;
margin: auto;
}
@media (min-width:1858px){
width: 60%;
display: flex;
flex-wrap: wrap;
justify-content:center;
margin: auto;
}

`
