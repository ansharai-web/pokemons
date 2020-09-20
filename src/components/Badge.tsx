import styled from 'styled-components'

interface IBadgeProps {
    badgeColor?: string
    backgroundColor?: string
    badgeTransform?: string

}
export const Badge = styled.span`
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
