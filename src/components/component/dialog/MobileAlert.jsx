import React from "react"
import H1 from "components/common/H1"
import Div from "components/common/Div"
import styled from "styled-components"
import P from "components/common/P"

const AlertContainer = styled( Div )`
    box-shadow: ${({ boxShadow }) => {
        return boxShadow ? boxShadow : null
    }};
    overflow: hidden;
`

const Text = styled( P )`
    white-space: pre-line;
    word-break: break-all;
    text-align: center;
`

const MobileAlert = ({ children }) => {
    return (
        <AlertContainer width="280px" height="200px" backgroundColor="white" radius="30px" boxShadow="2px 2px 2px 0px rgba(0, 0, 0, 0.25)">
            <Div flex="row_center" paddingTop="28px" height="70px" backgroundColor="top_green">
                <H1 color="white" size="small5" weight="70px" lineHeight="32px" letterSpacing="-0.8px">
                    { children?.title ? children.title : null }
                </H1>
            </Div>
            <Div flex="row_center" height="calc( 100% - 70px )">
                <Text size="small2" weight="500" letterSpacing="-0.6px">
                    { children?.message ? children.message : null }
                </Text>
            </Div>
        </AlertContainer>
    )
}

export default MobileAlert