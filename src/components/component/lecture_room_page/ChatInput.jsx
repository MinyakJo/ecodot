import React from "react"
import Div from "components/common/Div"
import Input from "components/common/Input"
import Icon from "components/common/Icon"
import styled from "styled-components"
import Img from "components/common/Img"
import send_icon from "../../../svg/green_send_icon.svg"

const ChatInputContainer = styled( Div )`
    box-shadow: 3px 4px 10px 0px rgba(0, 0, 0, 0.25);
`

const InputContainer = styled( Div )`
    flex-basis: calc( 100% - 54px );
`

const ChatInput = ({ onChange, height, padding, onKeyUp, value, disabled, placeholder, iconWidth, size }) => {
    return (
        <ChatInputContainer 
            flex="row"
            height={ height ? height : null }
            padding={ padding ? padding : null }
            radius="20px"
            backgroundColor="curriculum_side_background"
            marginTop="30px"
        >
            <InputContainer radius="50px">
                <Input
                    weight="500"
                    size={ size ? size : "small4" }
                    height="100%"
                    autoComplete="off"
                    letterSpacing="-0.72px"
                    onChange={ onChange ? onChange : null }
                    onKeyUp={ onKeyUp ? onKeyUp : null }
                    value={ value }
                    disabled={ disabled }
                    placeholder={ placeholder }
                />
            </InputContainer>
            <Icon flex="row_center" basis={ iconWidth ? iconWidth : "46px" } marginLeft="8px">
                <Img src={ send_icon } id="send"/>
            </Icon>
        </ChatInputContainer>
    )
}

export default ChatInput