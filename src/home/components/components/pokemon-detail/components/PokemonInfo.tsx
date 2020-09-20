import * as React from 'react'
import {Badge} from '../../../../../components/Badge'
import styled from 'styled-components'
import {TwoColumnOrderedList} from '../../../../../components/TwoOrederedList'
import {IPokemonStats} from '../../../../PokemonInterfaces'


const PokemonStats = styled.p`
margin: 0;
    padding: 0;
    text-align: center;
`


//TODO FIX INTERFACE
interface IPokemonInfoProps {
    stats: IPokemonStats[]
    name: string
}

const PokemonInfoFC: React.FC<IPokemonInfoProps> = ({stats,name}) => {

    return (<div>
            <PokemonStats>
                <Badge backgroundColor=' #C6D3E6' badgeColor='#505E67'
                       badgeTransform='uppercase'>{name} Stats</Badge>
            </PokemonStats>
            <TwoColumnOrderedList>
                {stats.map((detail: any, index: number) => {
                    return <li
                        key={`stats_${detail.stat.name}_${index}`}> {detail.stat.name}: {detail.base_stat}</li>
                })}

            </TwoColumnOrderedList>
        </div>
    )
}

export const PokemonInfo = PokemonInfoFC
