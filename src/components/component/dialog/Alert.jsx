import React from "react"
import styled from "styled-components"
import CommonStyle from "components/style"
import Div from "components/common/Div"
import { listPopAfterSet } from "module/listPopAfterSet"
import { useRecoilState } from "recoil"
import { dialogState } from "recoil/dialogAtom"
import Button from "components/common/Button"
import P from "components/common/P"

const AlertContainer = styled( Div )`
    max-width: 650px;
    box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.25);
`

const ButtonContainer = styled( Div )`
    background: linear-gradient(134deg, #C9E50B 1.95%, #338778 74.68%);
`

const Alert = ({ children }) => {

    //recoil
    const [ dialog, setDialog ] = useRecoilState( dialogState )

    //event
    const onClickEvent = () => {
        listPopAfterSet( dialog, setDialog )
    }

    return (
        <AlertContainer padding="40px 120px" paddingTop="105px" radius="30px" backgroundColor="white">
            {/* 알람 매세지 */}
            <Div flex="row_center" marginBottom="60px">
                <P color="medium4" weight="400" letterSpacing="-1px">
                    { children?.message ? children.message : "" }
                </P>
            </Div>
            {/* 확인 버튼 */}
            <Div flex="row_center">
                <ButtonContainer width="180px" height="60px" radius="999px">
                    <Button color="white" size="medium4" weight="700" letterSpacing="-1px" onClick={ onClickEvent }>
                        확인
                    </Button>
                </ButtonContainer>
            </Div>
        </AlertContainer>
    )
}

export default Alert