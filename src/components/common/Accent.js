// ===== Library =====

import styled from 'styled-components'

// ===== Module =====

import CommonStyle from "components/style"

// ===== Style =====

const Accent = styled.span`

    color: ${props => {
        return props.color ? CommonStyle.setColor(props.color) : CommonStyle.setColor("black")
    }};
    margin-right: ${({ marginRight }) => {
        return marginRight ? marginRight : null
    }}; 
    margin-left: ${({ marginLeft }) => {
        return marginLeft ? marginLeft : null
    }};
    font-weight: ${({ weight }) => {
        return weight ? weight : null
    }};
    user-select: none;
`

export default Accent