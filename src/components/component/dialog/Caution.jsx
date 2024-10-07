import React from "react"
import Div from "components/common/Div"
import styled from "styled-components"
import CommonStyle from "components/style"
import Button from "components/common/Button"
import { useRecoilState } from "recoil"
import { dialogState } from "recoil/dialogAtom"
import { listPopAfterSet } from "module/listPopAfterSet"
import P from "components/common/P"

const CautionContainer = styled( Div )`
    max-width: 650px;
    min-height: 300px;
`

const ButtonContainer = styled( Div )`
    background: ${({ background }) => {
        return background ? background : null
    }};
`

const Text = styled( P )`
    white-space: pre-line;
    word-break: break-all;
`

const Caution = ({ children }) => {

    //recoil
    const [ dialog, setDialog ] = useRecoilState( dialogState )

    //event
    const onClickEvent = () => {
        listPopAfterSet( dialog, setDialog )
    }

    return (
        <CautionContainer padding="40px 0px" backgroundColor="white" radius="30px">
            {/* 매세지 */}
            <Div flex="row_center" marginTop="65px" marginBottom="60px">
                <Text size="medium4" weight="400" letterSpacing="-1px">
                    { children.message }
                </Text>
            </Div>

            {/* 확인 버튼 */}
            <Div flex="row_center">
                <ButtonContainer 
                    width="180px" 
                    height="60px" 
                    background="linear-gradient(134deg, #C9E50B 1.95%, #338778 74.68%)" 
                    radius="999px"
                    onClick={ onClickEvent }
                >
                    <Button color="white" size="medium4" weight="700" letterSpacing="-1px">
                        확인
                    </Button>
                </ButtonContainer>
            </Div> 
        </CautionContainer>
    )
}

export default Caution