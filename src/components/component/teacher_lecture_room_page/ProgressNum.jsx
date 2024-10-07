import React from "react"
import P from "components/common/P"
import styled from "styled-components"

const ProgressNumText = styled( P )`
    white-space: nowrap;
`

const ProgressNum = ({ children, size, weight, letterSpacing }) => {
    return (
        <ProgressNumText color="top_green" size={ size } weight={ weight } letterSpacing={ letterSpacing }>
            { !isNaN( children ) && children ? children : 0 }%
        </ProgressNumText>
    )
}

export default ProgressNum