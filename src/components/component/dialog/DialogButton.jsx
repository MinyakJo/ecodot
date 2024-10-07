import React from "react"
import Div from "components/common/Div"
import styled from "styled-components"
import Button from "components/common/Button"

const ButtonContainer = styled( Div )`
    box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.25);
    background: ${({ background }) => {
        return background ? background : null
    }};
`

const DialogButton = ({ buttonWidth, background, children, sideMargin, id }) => {
    return (
        <Div flex="row_center">
            {
                children && children.map(( e, i ) =>
                    <ButtonContainer 
                        key={ `dialog_button_${ i }` }
                        radius="99px" 
                        width={ buttonWidth ? buttonWidth : null } 
                        height="70px" 
                        marginLeft={ sideMargin ? sideMargin : null } 
                        marginRight={ sideMargin ? sideMargin : null }
                        background={ ( background && background?.length ) ? background[ i ] : null }
                    >
                        <Button color="white" size="medium4" weight="700" letterSpacine="-1px" id={ ( id && id?.length ) ? id[ i ] : null }>
                            { e }
                        </Button>
                    </ButtonContainer>   
                )
            }
        </Div>
    )
}

export default DialogButton