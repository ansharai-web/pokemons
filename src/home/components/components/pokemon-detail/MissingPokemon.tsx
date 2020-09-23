import * as React from 'react'
import {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'

interface IMissingPokemon {

}

export const MissingPokemon:React.FC<IMissingPokemon> = () => {
    const history = useHistory()
    const [time, setTime] = useState(5)
    useEffect(() => {
        let temp: any
        if (time === 0) {
            history.push('/')
        }

            temp = setInterval(() => setTime((prevTime) => prevTime - 1), 1000)

        return () => {

            temp && clearInterval(temp)
        }
    }, [history, time])



        return (<h1 style={{textAlign: 'center', color: '#fff', fontSize: '50px'}}>No pokemon Details Available. You will
        be redirected to the main page in {time} </h1>)

}
