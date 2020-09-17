import * as React from 'react'
import {ChangeEvent} from 'react'

interface IHomeProps {}

const HomeFC: React.FC<IHomeProps> = () => {

    const handlePokemonChange = (e:ChangeEvent<HTMLInputElement>) => {
        console.log('POKEMON',e.target.value)
    }
     return (
              <>
                <div>
                    <input type='search' placeholder='Filter pokemons' onChange={handlePokemonChange}/>
                </div>
              </>
       )
}

export const Home = HomeFC
