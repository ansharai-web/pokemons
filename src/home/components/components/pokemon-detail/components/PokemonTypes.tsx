import * as React from 'react'
import {Badge} from '../../../../../components/Badge'
import {IPokemonTypes} from '../../../../PokemonInterfaces'


interface IPokemonTypesProps {
    types: IPokemonTypes[]
}

const PokemonTypesFC: React.FC<IPokemonTypesProps> = ({types}) => {
    return (
        <div style={{marginTop: '5%', marginLeft: '3%'}}>
            {Array.isArray(types) && types.map((type: any, index: number) => {
                return <Badge
                    backgroundColor=' #C6D3E6'
                    badgeColor='#505E67'
                    badgeTransform='capitalize'
                    key={`type_${type.name}_${index}`}>{type.type.name || ''}</Badge>
            })}
        </div>
    )
}

export const PokemonTypes = PokemonTypesFC
