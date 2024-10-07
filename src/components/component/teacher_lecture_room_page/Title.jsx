import React from "react"
import styled from "styled-components"
import Div from "components/common/Div"
import Img from "components/common/Img"
import Icon from "components/common/Icon"
import CommonStyle from "components/style"
import H1 from "components/common/H1"

const TitleContainer = styled( Div )`
    border-bottom: ${({ borderBottom }) => {
        return borderBottom ? `3px solid ${ CommonStyle.setColor( borderBottom ) }` : null
    }};
`

const Title = ({ children, src, iconWidth, iconHeight, paddingTop, paddingBottom }) => {
    return (
        <TitleContainer 
            flex="row" 
            paddingTop={ paddingTop ? paddingTop : null } 
            paddingBottom={ paddingBottom ? paddingBottom : null } 
            borderBottom="top_green"
        >
            <Icon width={ iconWidth } height={ iconHeight } ratio="0" marginRight="15px">
                <Img width="100%" src={ src }/>
            </Icon>
            <Div>
                <H1 size="large2" weight="700" family="jamsil">
                    { children }
                </H1>
            </Div>
        </TitleContainer>
    )
}

export default Title